import React from 'react'
import "./Navbar.css"

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'><h3>Lama Hotel </h3> </span>
        <div className="navItems">

          <button className='navButton'>Register</button>
          <button className='navButton'>LogIn</button>
        </div>
      </div>
    </div>
  )
}

export default navbar