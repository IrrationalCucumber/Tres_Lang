import React, { useState, useEffect } from "react";
import "../components/Styles/Signup.css";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    username: "",
    password: "",
    Bday: new Date(),
    age: 0,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is 'Bday' and parse the value into a Date object
    const updatedValue = name === "Bday" ? new Date(value) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const formatDate = (date) => {
    // Format the date as needed, for example: YYYY-MM-DD
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:8800/signup",
        formData
      );
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // };
  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Sign Up</div>
        </div>
        <div className="container">
          <input
            type="text"
            value={formData.userid}
            onChange={handleChange}
            placeholder="Enter your User ID"
            name="userid"
          />

          <label>
            <b>First Name</b>
          </label>
          <input
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your First Name"
            name="Fname"
          />

          <label>
            <b>Last Name</b>
          </label>
          <input
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your Last Name"
            name="Lname"
          />

          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your Username"
            name="username"
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            name="password"
          />
          <label>
            <b>Birthday</b>
          </label>
          <input
            type="date"
            value={formatDate(formData.Bday)}
            onChange={handleChange}
            placeholder="Enter your Birthday"
            name="Bday"
          />

          <label>
            <b>Age</b>
          </label>
          <input
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your Age"
            name="age"
          />

          <label>
            <b>Gender</b>
          </label>
          <input
            type="text"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Enter your Gender"
            name="gender"
          />

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
