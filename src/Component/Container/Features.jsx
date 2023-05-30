import React from 'react'
import "./Container.css"
import useFetch from '../../hooks/useFetch'

const Conatiner = () => {
 
  const {data, loading, error}= useFetch("/hotels/countByCity?cities=KTM,Nagarkot,PKR") 
 
  return (
    <>
      <div className="featured">
       {loading ? "Loading your request": (<> <div className="featuresItem">
          <img src="https://www.journeyera.com/wp-content/uploads/2022/01/luxury-5-star-hotels-kathmandu-thamel-251085752.jpg" alt="" className="featureimg" />
          <div className="titels">
            <h1>Hello</h1>
            <h2>{data[0]} properties</h2>
          </div>
        </div>
        <div className="featuresItem">
          <img src="https://www.journeyera.com/wp-content/uploads/2022/01/luxury-5-star-hotels-kathmandu-thamel-251085752.jpg" alt="" className="featureimg" />
          <div className="titels">
            <h1>Hello</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuresItem">
          <img src="https://www.journeyera.com/wp-content/uploads/2022/01/luxury-5-star-hotels-kathmandu-thamel-251085752.jpg" alt="" className="featureimg" />
          <div className="titels">
            <h1>Hello</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div></>)}
      </div></>
  )
}

export default Conatiner