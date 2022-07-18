import React from "react";
import logo from "../../assets/Images/logo-black.png";
import avatar from "../../assets/Images/avatar.jpg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="topbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="topbar-searchbar">
          <input type="text" placeholder="Search" />
          <div className="circle">
            <img src={search} alt="search icon" />
          </div>
        </div>
      </div>
      <div className="topbar-right">
        <img src={upload} alt="upload icon" />
        <img src={avatar} alt="user avatar" />
      </div>
    </div>
  );
};

export default Topbar;
