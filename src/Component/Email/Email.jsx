import React from 'react'
import "./Email.css"
const Email = () => {
  return (
    <>
    <div className="intro">
        <div className="introheading">
            <span className='email-save'>Save Time, save money!</span>
            <span className='email-sign'>Sign up to see the best deal and grab the opportunity</span>

        </div>
        <div className="button">
            <input type="text" className='input'/>
            <button className='btn-btn'>Search</button>
        </div>
        </div>
  
    </>
  )
}

export default Email