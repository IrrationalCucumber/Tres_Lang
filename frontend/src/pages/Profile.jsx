import React from 'react';
import "../components/Styles/Profile.css"
import axios from "axios"
import { useState } from 'react';

export const Profile = () => {
  
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
  
    const handleClick = () => {
  
      axios.post('http://localhost:3000/profile',
        {
          firstnamename: firstname,
          lastnamename: lastname,
          password: password,
          birthday: birthday,
          age: age,
          gender: gender,
         
         
        }
      )
        .then((response) => {
          console.log(response);
        });
    };
  return (
    
    <React.Fragment>
     
      <div className='background'>
                
                  <form className="cf">
                  <center><h1>EDIT PROFILE</h1></center>
                      <input type="text" placeholder="FIRSTNAME" value={firstname} onChange={(e) => setFirstname(e.target.value)}required />
                      <input type="text" placeholder="LASTNAME" value={lastname} onChange={(e) => setLastname(e.target.value)}required />
                      <input type="text" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      <input type="text" placeholder="BIRTHDAY" value={birthday} onChange={(e) => setBirthday(e.target.value)}required />
                      <input type="text" placeholder="AGE" value={age} onChange={(e) => setAge(e.target.value)}required />
                      <input type="text" placeholder="GENDER" value={gender} onChange={(e) => setGender(e.target.value)}required />
                      <div className="button-submit">
                      <button onClick={() => handleClick()}>SUBMIT</button>
                      </div>
                  </form>
               
                </div> 
           
    </React.Fragment>
    
  )
}

export default Profile;