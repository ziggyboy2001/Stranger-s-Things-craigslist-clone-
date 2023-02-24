import React, { useState }from "react";
import { Link, Outlet, Route, Router } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const searchResults = [
 
  ];
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  if(search.length > 0){
    searchResults.filter((searches) => {
      return searches.name.match(search);
    })
  }




  return (
    <div id="navbar">
      <img className="companyLogo" src="/Untitled_Artwork 25.png" alt="" />
      <Link to="/newpost" className="listItemBtn">LIST AN ITEM</Link>

      <input className="searchInput"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={search}
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
