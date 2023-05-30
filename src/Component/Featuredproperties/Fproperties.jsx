import React from 'react'
import "./Fproperties.css"
import useFetch from '../../hooks/useFetch'

const Fproperties = () => {

  const {data, loading, refetchData, error} = useFetch(`/hotels?featured=true&limit=4`)
  
  
  return (
    <>
    <div className="fproperties">
     {loading? "loading": <> 
     {data.map((item)=>(<div className='flist' key={item._id}>
        <img src="https://images.trvl-media.com/hotels/23000000/22840000/22833400/22833387/dc044ec7_z.jpg" alt="" className='flistImage'/>
        <span className='heading'>Bunjungle resort surrounded by hill</span>
        <span className='rate'>Starting from {item.price}</span>
        <div className='frating'>
          <button className='bttn'>{item.rating}</button>
          <span className='word'>Excellent</span> 
          <span className='reviews'>532 reviews</span>
        </div>

      </div>))}</>}
     
      </div>  </>
  )
}

export default Fproperties