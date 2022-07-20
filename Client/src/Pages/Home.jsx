import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
import Videos from "../Components/Videos/Videos";
const Home = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Videos />
    </>
  );
};

export default Home;
