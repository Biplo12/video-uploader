import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import "./Components/Styles/__globalStyles.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home type="random" />} />
          <Route path="/explore" element={<Home type="trend" />} />
          <Route path="/subscriptions" element={<Home type="sub" />} />
          <Route path="/video" element={<Video />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
