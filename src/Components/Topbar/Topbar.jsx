import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSmall from "../../assets/Images/logo-small-black.png";
import avatar from "../../assets/Images/avatar.jpg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/">
          <div className="topbar-logo">
            <img src={logoSmall} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="topbar-searchbar">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search icon" />
        </div>
      </div>
      <div className="topbar-right">
        {/* <img src={upload} alt="upload icon" className="upload-icon" /> */}
        <img src={avatar} alt="user avatar" />
      </div>
    </div>
  );
};

export default Topbar;
