import React from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2 className="title">Stranger's Things</h2>
      <h3 className="navBtns">HOME</h3>
      <h3 className="navBtns">POSTS</h3>
      <Link to="/login"  className="navBtns">LOGIN</Link>

    </div>
  );
};

export default Navbar;