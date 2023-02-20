import React, {useState, useEffect} from "react";
import { Navbar, DummyPosts, Login } from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";




const Main = () => {
    const [posts, setPosts] = useState([]);
   
    async function getPosts() {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft/posts"
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

// return posts.map((post) => {
//     return (
//         <div className="userName" key={`${post._id}`}></div>

//     )
// })


    return(
        <div id="main">
            <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="/" element={<DummyPosts posts={posts} />}/>
            <Route path="/login" element={<Login />}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main