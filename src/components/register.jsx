import { React, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api-adapter";

function Register() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  async function makeProfile(userName, password, confirmPass) {
    console.log(userName, password, confirmPass);
    try {
      const result = await registerUser(userName, password, confirmPass);
      console.log(result);
      setUsername("");
      setPassword("");
      setConfirmPass("");
    } catch (error) {
      console.log(error);
    }
  }
  function confirmPassword(password) {
    if (confirmPass === password) {
      alert("Thank you!");
      return true;
    } else {
      alert("Passwords do not match");
    }
    if(confirmPass === null || password === null){
        alert("No password was input")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    makeProfile(userName, password, confirmPass);
    confirmPassword(password, confirmPass);
    if (result != undefined) {
        localStorage.setItem("token", result.data.token);
        navigate("/login");
      } else {
        console.log(result.error);
      }
  };

  return (
    <div className="loginPageBox">
      <div className="loginPage">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <p>Username:</p>
          <input
            className="userNameInput"
            value={userName}
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <p>Password:</p>
          <input
            className="passwordInput"
            value={password}
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <p>Confirm Password:</p>
          <input
            className="passwordInput"
            value={confirmPass}
            type="text"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />

          <br></br>
          <button
            className="submitBtn"
            type="submit"
            // onClick={function submitSuccess(props) {
            //     console.log(props)
            //     return props.users.map((user) => {
            //       const successTrue = {user.success} === true
            //     {successTrue
            //     ? <Link to="/login" className="submitLink" />
            //     : alert("PW doesnt match")
            // }
            //   });
            // }}
          >
            Submit
          </button>
          <br></br>
          <Link to="/login" className="registerLink">
            Already have an account? Login here!
          </Link>
          <img
            className="companyLogoLoginBox"
            src="/Untitled_Artwork 25.png"
            alt=""
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
