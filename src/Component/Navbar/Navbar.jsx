import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
        <span className='logo'><h3>Lama Hotel </h3> </span>
        </Link>
        <div className="navItems">

          <button className='navButton'>Register</button>
          <button className='navButton'>LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default navbar