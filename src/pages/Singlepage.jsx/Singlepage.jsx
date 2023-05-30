import React, { useEffect, useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import "./Singlepage.css"
import Footer from '../../Component/Footer/Footer'
import { FaBed, FaCar, FaHotel, FaPlane, FaShower, FaTaxi, FaTv, FaWifi } from "react-icons/fa"
import { ImCalendar } from "react-icons/im"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import {RxCrossCircled} from "react-icons/rx"

const Singlepage = () => {

   const [sliderNumber, setSlideNumber]= useState(0)
   const [open, setOpen]= useState(false)

  const photos = [
    {src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  },
{
  src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

},

{
      src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  },
]

const handleClick =(i)=>{
 setOpen(true)
 setSlideNumber(i)

}


const handleMove=(direction)=>{
    let newSliderNumber;
    if(direction==="l")
    {
      newSliderNumber= sliderNumber=== 0? 3 : sliderNumber -1;
 }
   else{
    newSliderNumber = sliderNumber=== 3? 0 : sliderNumber+ 1
   }

   setSlideNumber(newSliderNumber)
}


  return (
   <><div>
    
    <Navbar/>
        <Header type="list" />
       

        <div className="container">
        {open && <div className="slider">
      <div className="sliderWrapper">
      <RxCrossCircled className="cross" onClick={()=> setOpen(false)}/>
          <BsFillArrowLeftCircleFill className="leftarrow" onClick={()=> handleMove("l")}/>
          <BsFillArrowRightCircleFill className="rightarrow" onClick={()=> handleMove("r")}/>
          <div className="sliderWrapper">
          <img src={photos[sliderNumber].src} className='sliderImage' alt="" />
          </div>
         </div>
      </div>

         }
       
     
        <div className="sliderContent">
          <div className="imageSlide">
            <img src={photos[sliderNumber].src} alt="" />
          </div>
          <div className="leftArrow"> <BsFillArrowLeftCircleFill className="leftarrow" onClick={()=> handleMove("l")}/>
       </div>
        
          <div className="rightArrow"><BsFillArrowRightCircleFill className="rightarrow" onClick={()=> handleMove("r")}/>
      </div>
       
      </div>
         
          <div className="content">
           
          <div className="decscription">
              <div className="heading">
                   <FaWifi className='icon'/>
                   <FaShower className='icon'/>
                   <FaBed className='icon'/>
                   <FaTv className='icon'/>
                  
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quasi fugiat dolores. Deleniti delectus molestiae rerum, quasi nemo tempore dolores totam illo nesciunt impedit commodi. Consectetur dolore sapiente expedita, eveniet repellendus corporis pariatur assumenda eum amet non adipisci facilis aliquam ad repellat, obcaecati voluptas qui quaerat? Natus ut nemo libero perferendis tempore sint, doloremque pariatur laborum eos. Corrupti quod dignissimos repellendus rem quia quisquam soluta incidunt, voluptatibus odit neque vitae ea tempora non minus. Illo molestias ullam ad quia rerum necessitatibus cum officiis quo voluptate! Sit debitis tenetur error vel praesentium. Doloremque, mollitia cum? Eos laborum enim veritatis blanditiis! Iure asperiores veritatis aperiam quasi excepturi odit deleniti neque a suscipit reprehenderit cupiditate nemo molestias expedita ea et, nostrum, natus corrupti error quo maiores numquam facere quas reiciendis. Tempora cum provident ullam possimus consectetur a harum adipisci! Architecto aliquid impedit deserunt. Molestias officia laboriosam asperiores nobis incidunt quia pariatur quae dignissimos ad illo laudantium mollitia nihil recusandae ratione accusantium odit consequatur consectetur, excepturi quas. Harum veniam, excepturi deserunt modi maxime est adipisci eveniet facilis voluptates earum, quo quibusdam, perferendis eius minima fuga a nulla itaque quidem esse molestiae doloribus ad? Ex consequuntur corrupti amet sunt eligendi dignissimos magnam omnis itaque officia?</p>

            </div>
            <div className="booking">
              <h4>Couple room </h4>
              <span>Located in the right side of the lazimpat near to the Machhapuchree Bank</span>
              <big>Rs 5999</big>
              <button className='bookBtn'>Book now</button>
            </div>
          
          </div>
         
        </div>
        <div className="copyright">
                         <span>Copyright @ 2023 Lama Hotel </span>
                    </div>
        </div></>
  )
}

export default Singlepage