import React from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <img className="companyLogo" src="/Untitled_Artwork 25.png" alt="" />
      <Link to="/newpost" className="listItemBtn">LIST AN ITEM</Link>

      <input className="searchInput"
        type="text"
        placeholder="Search..."
      />
      <h3 className="navBtns1">HOME</h3>
      <Link to="/" className="navBtns2">
        POSTS
      </Link>
      <Link to="/login" className="navBtns3">
        LOGIN
      </Link>
    </div>
  );
};

export default Navbar;
