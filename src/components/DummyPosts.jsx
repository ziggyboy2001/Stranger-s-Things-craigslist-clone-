import  React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { getIndividualPost } from "../api-adapter";

function DummyPosts(props) {
    let { id } = useParams([]);
    const [openedPost, setOpenedPost] = useState([]);
  console.log(id);
  const mapPosts = props.posts.map((post) => {
    return (
      <div className="postInfo" key={`${post._id}`}>
        <div>
          <img className="paperPlaneImg" src="/Untitled_Artwork 23.png" />

          <h2 className="postTitle">{post.title}</h2>
          <p>Seller: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>{post.description}</p>
          <p>Location: {post.location}</p>
        </div>
      </div>
    );
  });
getIndividualPost()

  return (
    // <div key={`${post._id}`}>
    <div className="openedPostContainer">
            <div>{mapPosts}</div>
        <div className="openedPostWindow" >
          <img
            className="companyLogoPostWindow"
            src="/Untitled_Artwork 25.png"
            />
        <button className="openedPostMessageSellerBtn">MESSAGE SELLER</button>
        </div>
      <div>
      </div>
    </div>
  );
}

export default DummyPosts;
