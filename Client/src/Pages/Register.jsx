import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="login-register-container">
        <h1>Register</h1>
        <p className="title-description">
          Please register below to create a new account on our <br />
          website.
        </p>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder="Confirm Password" />
        <button>Log In</button>
        <p>U have an account?</p>
        <Link to="/signin">Login to account</Link>
      </div>
    </>
  );
};

export default Register;
