import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api-adapter";
import { MultilineInput } from "react-input-multiline";

function NewPost(props) {
  const [newTitle, setNewTitle] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewPrice] = useState();
  const navigate = useNavigate();

  const posts = props.posts;
  const setPosts = props.setPosts;

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await createPost(newTitle, newDescription, newPrice);
    const postsCopy = [...posts];
    postsCopy.push(result.data.post);
    setPosts(postsCopy);
    navigate("/");
  };

  return (
    <div className="newPostFormBox">
      <div className="newPostFormFull">
        <form onSubmit={handleClick}>
          <div className="newPostLabelText">
            <h3>CREATE A NEW LISTING</h3>
            <label>
              Title:
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={newTitle}
                onChange={(event) => {
                  console.log(event.target.value);
                  setNewTitle(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Description:
              <textarea
                className="newPostInput"
                name="description"
                type="text"
                value={newDescription}
                onChange={(event) => {
                  console.log(event.target.value);

                  setNewDescription(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Price:
              <input
                className="newPostInput"
                name="price"
                type="text"
                value={newPrice}
                onChange={(event) => {
                  console.log(event.target.value);

                  setNewPrice(event.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button className="newPostBtn" type="submit">
              POST
            </button>
          </div>
          <img
            className="companyLogoListItemBox"
            src="/Untitled_Artwork 25.png"
          />
        </form>
      </div>
    </div>
  );
}

export default NewPost;
