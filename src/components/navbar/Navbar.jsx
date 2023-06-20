import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav-left'>
        <Link to ="/">
          <img src="../../../public/assests/Images/logo.svg" alt="no preview" />
        </Link>
        <span>Services</span>
        <span>About Us</span>
        <span>Contact Us</span>
        
        </div>
      <div className='nav-right'>
        <span>Sign in</span>
        <div className='signUp'>
          SignUp
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar