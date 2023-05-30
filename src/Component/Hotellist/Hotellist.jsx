import React, { useState } from 'react'
import "./Hotellist.css"
import { Link, useLocation } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'




const Hotellist = ({item}) => {
 
  console.log(item)
  return (
    <>
      <div className="hotelist">
        <img src={item.city} alt="" />
        <div className="listItem">
          <h2>Kathmandu Guest House</h2>
          <span><small>200m from main road</small></span>
          <p className='subtitle'>Free airpot </p>
          <small>Room with Airconditioning</small>
          <p className='about'> Entire studio 1-attach bathroom -2 comfortable bed </p>
          <span className='cancelation'>Free cancelation without any charge </span>
        </div>
        <div className="reviewlist">
          {item.rating && <div className="rating">
            <span>Excellent</span>
            <button>{item.rating}</button>

          </div>}
          <div className="taxdetails">
            <span className="price">{item.price}</span>
            <span className="tax">Includes tax and vat</span>
            <Link to={`/hotels/${item._id}}`}>
            <button className="reviewButton">See availability</button>
            </Link>
          </div>



        </div>
      </div>
      
     


    </>
  )
}

export default Hotellist