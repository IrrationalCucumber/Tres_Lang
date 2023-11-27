import React, { useState } from 'react'

import "../NavBar/NavBar.css"
import { Link } from 'react-router-dom'
const NavBar = () => {

    const [menu,setMenu] = useState("Home")
  return (

    <div className='navbar'>
        <div className='nav-logo'>
            <p>ADVENTURE DIARY</p>
               
        </div>
        
        <ul className="nav-menu"> 

           {/* basta mo click kay sa link kay mo redirect ka home, profile, or about */}
           <li onClick={()=>{setMenu("Home")}}n><Link style={{textDecoration:'none'}} to="/">Home</Link>{menu==="Home"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("Profile")}}n><Link style={{textDecoration:'none'}}  to="/profile">Profile</Link>{menu==="Profile"?<hr/>:<></>}</li>
           <li onClick={()=>{setMenu("About")}}n><Link  style={{textDecoration:'none'}}  to="/about">About</Link>{menu==="About"?<hr/>:<></>}</li>
             
        </ul>

       <div className="log-in">

          <button>Login </button>
       </div>

    </div>
  
  )
}

export default NavBar;