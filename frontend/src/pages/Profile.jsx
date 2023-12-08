import React, { useEffect } from "react";
import "../components/Styles/Profile.css";
import axios from "axios";
import { useState } from "react";
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

  useEffect(() => {});

  const navigate = useNavigate();
  //pre-fill the fields
  useEffect(() => {
    const fetchAccount = async () => {
      axios
        .get(`https://localhost:8800/Profile?userId=${userId}`)
        .then((response) => {
          if (response != null) console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      //   try {
      //     const res = await axios.get(
      //       `http://localhost:8800/Profile?userId=${userId}`
      //     );
      //     const retrievedAccount = res.data[0];
      //     //format date
      //     const formattedDate = new Date(retrievedAccount.userBday)
      //       .toISOString()
      //       .substr(0, 10);
      //     // Update the state with retrieved account data
      //     setAccount({
      //       username: retrievedAccount.username,
      //       password: retrievedAccount.password,
      //       fname: retrievedAccount.userFname,
      //       lname: retrievedAccount.userLname,
      //       bday: formattedDate,
      //       age: retrievedAccount.userAge,
      //       gender: retrievedAccount.userGender,
      //     });
      //   } catch (err) {
      //     console.log(err);
      //   }
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
      await axios.put(
        "http://localhost:8800/update_profile/" + userId,
        account
      );
      navigate(`/profile/${userId}`); //refresh page
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="background">
        <form className="cf">
          <center>
            <h1>EDIT PROFILE</h1>
          </center>
          <input
            type="text"
            placeholder="Username"
            value={account.username}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="FIRSTNAME"
            value={account.fname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="LASTNAME"
            value={account.lname}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={account.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="BIRTHDAY"
            value={account.bday}
            onChange={handleChange}
            name="bday"
          />
          <input
            type="text"
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
              <option value="male">Male</option>
              <option value="female">Female</option>
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
