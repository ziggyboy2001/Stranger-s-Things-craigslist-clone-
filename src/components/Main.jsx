import React, { useState, useEffect } from "react";
import {
  Navbar,
  DummyPosts,
  Login,
  Register,
  NewPost,
  Profile,
  SearchBar,
} from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function getPosts() {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const result = await response.json();
      const postsData = result.data.posts;

      setPosts(postsData);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="main">
      <BrowserRouter>
        <Navbar posts={posts} setPosts={setPosts} />
        <Routes>
          <Route
            path="/"
            element={<DummyPosts posts={posts} setPosts={setPosts} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/newpost"
            element={<NewPost setPosts={setPosts} posts={posts} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/SearchBar"
            element={
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
