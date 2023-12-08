// Login.js
import React, { useState } from "react";
import "../components/Styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userID, setUserID] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for empty username or password
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    axios
      .get(
        `https://localhost:8800/SignIn?username=${username}&password=${password}`
      )
      .then((response) => {
        if (response != null) {
          console.log(response.data);
          setUserID(response.data);
          console.log(userID);
          navigate(`/profile/${userID}`);
        } else {
          setError("Invalid Username/Password");
        }
      })
      .catch(function (error) {
        console.log(error);
        setError("Invalid Username/Password");
      });
  };

  return (
    <div>
      <div className="background">
        <div className="login-container">
          <h2>Login</h2>
          <h4 className="error-message">{error}</h4>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
