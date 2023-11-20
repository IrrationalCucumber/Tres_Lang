import React from 'react'


import email_icon from '../Assets/email.png'
import  password_icon from '../Assets/password.png'

import './Login.css'

const Login = () => {
  return (
  
     <div className='container'>
       <div className="header">
         <div className="text">Login</div>
         <div className="underline"></div>
       </div>
       <div className="inputs">
        
       
       
        <div className="input"> 
        <img src={email_icon} alt =''/>
         <input type = "email" placeholder='email'/>  </div>
        
         <div className="input">  
       <img src={password_icon} alt =''/>
         <input type = "password" placeholder='password'/></div>

       <div className="forgot">Forgot Password? <span>Click Here!</span></div>

       <div className="submit_container">
        <div className=""><button className='signUpButton'>Sign Up</button></div>
        <div className="log_btn"><button className='logInButton'>Login</button></div>

         
       </div>


       

      
       
       </div>

     </div>
    
  )
}

export default Login