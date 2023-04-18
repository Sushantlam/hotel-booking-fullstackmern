import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import Features from "../../Component/Container/Features"
import "./Home.css"
import Property from '../../Component/Featurelist/Propertylist'
import Fproperties from '../../Component/Featuredproperties/Fproperties'
import Email from '../../Component/Email/Email'
import Footer from '../../Component/Footer/Footer'
const Home = () => {
  return (
   <><div>
   <Navbar/>
   <Header/>
   <div className="features">
    <Features/>
   <h2 className='property'>Property Type</h2>
   <Property/>
   <h2 className="properlist">Hight rated</h2>
   <Fproperties/>
   <Email/>
   <Footer/>
   
   </div>
   </div></>
  )
}

export default Home