import {React, useState, useEffect} from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";



function Login(props){
    console.log(props)

        return (
            <div>
                <h1>login page</h1>
                <input className="userNameInput"
                type="text"
                 placeholder="Username"
      />
      <br></br>
            <input className="passwordInput"
        type="text"
        placeholder="Password"
      />
            </div>
        )
}

export default Login; 