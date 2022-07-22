import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
import { loginFailure, loginStart, loginSuccess } from "../Redux/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:3001/api/auth/signin", {
        name,
        password,
      });
      dispatch(loginSuccess(res.data));
    } catch (err) {
      console.log(err);
      dispatch(loginFailure());
    }
  };
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="login-register-container">
        <h1>Login</h1>
        <p className="title-description">
          Please login below - if you are not registered on our website,
          <br /> please create a new account
        </p>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>SIGN IN</button>
        <Link to="/password-reset" className="password-reset">
          Forgot password?
        </Link>
        <p>Don't have an account?</p>
        <Link to="/signup" className="signup-link">
          Create account
        </Link>
      </div>
    </>
  );
};

export default Login;
