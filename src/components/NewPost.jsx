import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewPost() {
  const [newTitle, setNewTitle] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewPrice] = useState();

  return (
    <div className="newPostFormBox">
      <div className="newPostFormFull">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="newPostLabelText">
            <label>
              Title:
              <input
                className="newPostInput"
                name="title"
                type="text"
                value={newTitle}
                onChange={(event) => {
                  setNewTitle(event.target.value);
                }}
              />
            </label>
          </div>
          <div className="newPostLabelText">
            <label>
              Description:
              <input
                className="newPostInput"
                name="description"
                type="text"
                value={newDescription}
                onChange={(event) => {
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
        </form>
      </div>
    </div>
  );
}

export default NewPost;
