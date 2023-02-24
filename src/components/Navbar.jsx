import React, { useState }from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";
import { SearchBar } from "./"

const Navbar = () => {



  return (
    <div id="navbar">
      <img className="companyLogo" src="/Untitled_Artwork 25.png" alt="" />
      <Link to="/newpost" className="listItemBtn">LIST AN ITEM</Link>

      <input className="searchInput"
        type="text"
        placeholder="Search..."

      />
      {/* <div>{<SearchBar />}</div> */}

      <Link to="/" className="navBtns1">
        HOME
      </Link>
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
