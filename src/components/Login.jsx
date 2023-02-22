import React, { useState, useEffect } from "react";
// import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../api-adapter";



function Login() {

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function makeProfile(userName, password) {
        console.log(userName, password)
        try{
       const result = await loginUser(userName, password); 
       console.log(result)
       setUsername("")
       setPassword("")
    }catch(error){
        console.log(error)
    }
}


    const handleSubmit = (e) => {
        e.preventDefault()
        makeProfile(userName, password)
    }

  
  return (
    <div className="loginPageBox">
    <div className="loginPage">
      <h1>Please login</h1>
      <form onSubmit={handleSubmit}>
      <p>Username:</p>
      <input className="userNameInput" 
      value={userName} 
      type="text" 
      placeholder="Username" 
      onChange={(e) => setUsername(e.target.value)}/>
      <br></br>
      <p>Password:</p>
      <input className="passwordInput" 
      value={password} 
      type="text" 
      placeholder="Password" 
      onChange={(e) => setPassword(e.target.value)}/>
      <br></br>
      <button  className="submitBtn" 
      type="submit" 
      >Submit</button>
      <br></br>
      <Link to="/register" className="registerLink">Dont have an account? Register here!</Link>
      </form>
    </div>
    </div>
  );
}

export default Login;
