import React from 'react'
import "./Propertylist.css"
import useFetch from '../../hooks/useFetch'

const Property = () => {

  const {data, loading, error}= useFetch("/hotels/getByType") 
//  console.log(data)
 
 const images= [
  "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/nepal/yak-and-yeti-kathmandu-p.jpg" ,
  "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/nepal/yak-and-yeti-kathmandu-p.jpg" ,
  "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/nepal/yak-and-yeti-kathmandu-p.jpg" ,
  "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/nepal/yak-and-yeti-kathmandu-p.jpg" 
 ]
 
 
 return (
    <>
    <div className="property">
      {loading ? "Loading your request": (<>
      {data && 
      images.map(( img, i)=>(
      <div className="plist" key={i}>
        <img src={img}
        alt="propertiesPhoto" 
        className='plistImg' />
        <div className="titles">
            <h1>{data[i]?.type}</h1>
            <h2>{data[i]?.count} {data[i]?.type} </h2>
          </div>
      </div>
      ))}
      </>)}     

    </div>
    </>
  )
}

export default Property