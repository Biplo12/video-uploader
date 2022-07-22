import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NoUserPage from "./Pages/NoUserPage";
import "./Components/Styles/__globalStyles.scss";
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home type="random" />} />
          <Route path="/explore" element={<Home type="trend" />} />
          <Route
            path="/subscriptions"
            element={currentUser ? <Home type="sub" /> : <NoUserPage />}
          />
          <Route path="/video" element={<Video />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
