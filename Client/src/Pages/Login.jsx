import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
const Login = () => {
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
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link to="/password-reset">
            <span className="un">Forgot password?</span>
          </Link>
        </form>
        <button>Log In</button>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <span className="un">Create account</span>
        </Link>
      </div>
    </>
  );
};

export default Login;
