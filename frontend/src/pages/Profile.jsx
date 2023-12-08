import React, { useEffect, useState } from "react";
import "../components/Styles/Profile.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const Profile = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    fname: "",
    lname: "",
    bday: "",
    age: "",
    gender: "",
  });
  //get user id from url
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const navigate = useNavigate();
  //pre-fill the fields
  useEffect(() => {
    const fetchAccount = async () => {
      axios
        .get(`https://localhost:8800/Profile?userId=${userId}`)
        .then((response) => {
          //if (response != null) console.log(response.data);
          // const retrievedAccount = response.data[0];
          //format date
          const formattedDate = new Date(response.data.bday)
            .toISOString()
            .substr(0, 10);
          setAccount({
            username: response.data.username,
            password: response.data.password,
            fname: response.data.fname,
            lname: response.data.lname,
            bday: formattedDate,
            age: response.data.age,
            gender: response.data.gender,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    fetchAccount();
  }, [userId]);

  const handleChange = (e) => {
    // For the 'gender' field, directly set the value without using spread syntax
    if (e.target.name === "gender") {
      setAccount((prev) => ({ ...prev, gender: e.target.value }));
    } else {
      // For other fields, use spread syntax as before
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  //save update
  const handleClick = async (e) => {
    try {
      await axios.post(
        `http://localhost:8800/update_profile?${userId}&
        ${account}`
      );
      // Using the callback to log the updated state
      setAccount((prevState) => {
        console.log(prevState);
        return prevState;
      });
      navigate(`/profile/${userId}`);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(account);
  return (
    <React.Fragment>
      <div className="background">
        <form className="cf">
          <center>
            <h1>EDIT PROFILE</h1>
          </center>
          <input
            type="text"
            value={account.username}
            placeholder="username"
            onChange={handleChange}
            name="username"
          />
          <input
            type="text"
            placeholder="FIRSTNAME"
            value={account.fname}
            onChange={handleChange}
            name="fname"
          />
          <input
            type="text"
            placeholder="LASTNAME"
            value={account.lname}
            onChange={handleChange}
            name="lname"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={account.password}
            onChange={handleChange}
            name="password"
          />
          <input
            type="date"
            placeholder="BIRTHDAY"
            value={account.bday}
            onChange={handleChange}
            name="bday"
          />
          <input
            type="number"
            placeholder="AGE"
            value={account.age}
            onChange={handleChange}
            name="age"
          />
          <label htmlFor="">
            Gender
            <select
              name="gender"
              onChange={handleChange}
              value={account.gender}
            >
              <option value="">Choose gender....</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
          <div className="button-submit">
            <button onClick={() => handleClick()}>SUBMIT</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
