import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
const Register = () => {
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
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </form>
        <button>Log In</button>
        <p>U have an account?</p>
        <Link to="/signin">
          <span className="un">Login to account</span>
        </Link>
      </div>
    </>
  );
};

export default Register;
