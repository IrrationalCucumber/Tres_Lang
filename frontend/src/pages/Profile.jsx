import React from 'react';
import "../components/Styles/Profile.css"
export const Profile = () => {
  
  return (
    
    <React.Fragment>
     
      <div className='background'>
                <contact id='profile'>
                  <form class="cf">
                  <center><h1>EDIT PROFILE</h1></center>
                      <input type="text" id="input-firstname" placeholder="Firstname"></input>
                      <input type="text" id="input-lastname" placeholder="Lastname"></input>
                      <input type="text" id="input-password" placeholder="Password"></input>
                      <input type="text" id="input-birthday" placeholder="Birthday"></input>
                      <input type="text" id="input-age" placeholder="Age"></input>
                      <input type="text" id="input-gender" placeholder="Gender"></input>
                   
                      <input type="submit" value="SUBMIT" id="input-submit"></input>
                  </form>
                </contact>
                </div> 
           
    </React.Fragment>
    
  )
}

export default Profile;