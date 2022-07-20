import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import "./Components/Styles/__globalStyles.scss";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
