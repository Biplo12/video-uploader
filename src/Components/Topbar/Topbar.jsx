import { useState, useEffect } from "react";
import logo from "../../assets/Images/logo-black.png";
import logoSmall from "../../assets/Images/logo-small-black.png";
import avatar from "../../assets/Images/avatar.jpg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";
const Topbar = () => {
  //onSroll style change
  const [logoResponsive, setLogoResponsive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setLogoResponsive(width >= 500 ? false : true);
    console.log(width);
  }, [width]);
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="topbar-logo">
          <img src={logoResponsive ? logoSmall : logo} alt="logo" />
        </div>
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
