import React from 'react'
import Link from 'react-router-dom'

export const Navbar = () => {
  return (
  <nav>
    
     <ul>
     <li> <Link to="/"> Home </Link></li>
     <li> <Link to="/profile">Profile</Link></li>
     <li> <Link to="/sign-up">Sign-Up </Link></li>
     <li> <Link to="/log-in">Login</Link></li>
    
     </ul>
   

  </nav>
  )
}
