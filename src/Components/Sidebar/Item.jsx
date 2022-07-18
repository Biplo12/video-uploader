import React from "react";
import { NavLink as Link } from "react-router-dom";

const Item = ({ destination, src, navItem }) => {
  return (
    <>
      <li>
        <Link
          to={destination}
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          <div className="box" />
          <img src={src} alt={`${navItem} icon`} />
          <p>{navItem}</p>
        </Link>
      </li>
    </>
  );
};

export default Item;
