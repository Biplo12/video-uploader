import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
const NoUserPage = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="nouser-container">
        <p>You need to signin to see subscribed channel videos</p>
        <Link to="/signin">
          <button>SIGN IN</button>
        </Link>
      </div>
    </>
  );
};

export default NoUserPage;
