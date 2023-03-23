import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { getIndividualPost, DeletePost } from "../api-adapter";

function DummyPosts(props) {
  const [openedPost, setOpenedPost] = useState({});

  function displayPost(post) {
    console.log(post);
    setOpenedPost(post);
    console.log(openedPost);
  }
  const handleClickDelete = async (id) => {
    const result = await DeletePost(id);

    const filteredData = props.posts.filter((element) => {
      if (element._id !== id) {
        return true;
      } else {
        return false;
      }
    });
    props.setPosts(filteredData);
    console.log("hello", result);
    // if (result != undefined) {
    //   return;
    // } else {
    //   console.log(result.error);
    // }
  };

  // const result = post.filter(post => post.title.includes)

  const mapPosts = props.posts.map((post) => {
    return (
      <div
        className="postInfo"
        onClick={() => {
          displayPost(post);
        }}
        key={`${post._id}`}
      >
        <div>
          <img className="paperPlaneImg" src="/Untitled_Artwork 23.png" />

          <h2 className="postTitle">{post.title}</h2>
          <p>Seller: {post.author.username}</p>
          <p>Price: {post.price}</p>
          {post.isAuthor ? (
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  handleClickDelete(post._id);
                }}
              >
                DELETE
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  });
  getIndividualPost();

  // function filterPosts (id) {
  //     for(let i = 0; i <= posts.length; i++)
  //     if(posts.id ){

  //     }
  // }

  return (
    // <div key={`${post._id}`}>
    <div className="openedPostContainer">
      <div>{mapPosts}</div>
      <div className="openedPostWindow">
        <img className="companyLogoPostWindow" src="/Untitled_Artwork 25.png" />
        <div className="openedPostTextBox">
          <div className="openedPostText">
            <h2>{openedPost.title}</h2>
            <p>Price: {openedPost.price}</p>
            <p>Description: {openedPost.description}</p>
            <p>Location: {openedPost.location}</p>
          </div>
          <button className="openedPostMessageSellerBtn">MESSAGE SELLER</button>

          <Link to="/profile" className="openedPostMyProfileBtn">
            MY PROFILE
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DummyPosts;
