import React from "react";
import Item from "./Item";
import {
  home,
  explore,
  subs,
  library,
  history,
  yourVideos,
  gaming,
  music,
  movies,
  news,
  darkMode,
  settings,
} from "../../assets/index";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-nav">
        <ul className="navbar-items">
          <Item destination={"/"} src={home} navItem="Home" />
          <Item destination={"/explore"} src={explore} navItem="Explore" />
          <Item
            destination={"/subscriptions"}
            src={subs}
            navItem="Subscriptions"
          />
          <Item destination={"/library"} src={library} navItem="Library" />
          <Item destination={"/history"} src={history} navItem="History" />
          <Item
            destination={"/your-videos"}
            src={yourVideos}
            navItem="Your Videos"
          />
        </ul>
        <ul className="navbar-categories">
          <h3>Categories</h3>
          <Item destination={"/gaming"} src={gaming} navItem="Gaming" />
          <Item destination={"/music"} src={music} navItem="Music" />
          <Item destination={"/movies"} src={movies} navItem="Movies" />
          <Item destination={"/news"} src={news} navItem="News" />
        </ul>
        <ul className="navbar-options">
          <li>
            <button>
              <img src={darkMode} alt="darkmode icon" />
              <p>Dark mode</p>
            </button>
          </li>
          <Item destination={"/settings"} src={settings} navItem="Settings" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
