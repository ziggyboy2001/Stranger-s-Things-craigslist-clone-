import React, { useState } from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";
import { SearchBar } from "./";

const Navbar = (props) => {
  const loggedIn = props.loggedIn;
  function onLogoutClick() {
    console.log("been clicked");
    localStorage.removeItem("token");
    window.location.reload(false);
  }

  return (
    <div id="navbar">
      <img className="companyLogo" src="/Untitled_Artwork 25.png" alt="" />
      <Link to="/newpost" className="listItemBtn">
        LIST AN ITEM
      </Link>

      <SearchBar posts={props.posts} setPosts={props.setPosts} />
      {/* <div>{<SearchBar />}</div> */}

      <Link to="/" className="navBtns1">
        HOME
      </Link>
      <Link to="/" className="navBtns2">
        POSTS
      </Link>
      {loggedIn ? (
        <Link className="navBtns3" id="navbarButtons" onClick={onLogoutClick}>
          Logout
        </Link>
      ) : (
        <Link className="navBtns3" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
