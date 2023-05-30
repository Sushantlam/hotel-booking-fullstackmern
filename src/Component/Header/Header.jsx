import React from 'react'
import { useState } from 'react'
import "./Header.css"
import { FaBed, FaCar, FaHotel, FaPlane, FaTaxi } from "react-icons/fa"
import { ImCalendar } from "react-icons/im"
import { BsFillPersonFill } from "react-icons/bs"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [open, setOpen]= useState(false)
    const [ destination, setDestination]= useState([])
    const[option, setOption]=useState({
        adult:1,
        children:0,
        room:1
    })

    const navigate = useNavigate()
    
    const handleSumbit=(name, operation)=>{
      
     
        setOption((prev)=>{
        return {
            ...prev, [name]: operation==="i" ? option[name] +1 : option[name] - 1,
    }})
    }

    const handleSearch=()=>{
        navigate("/hotels", {state: {destination, date, option}})
    }


    return (
        <>
        
            <div className="header">
                <div className={type ==="list" ? "header-section list" : "header-section"}>
                    <div className="items">
                        <div className="listItems active">
                            <FaBed className='icons' />
                            <span>Room</span>

                        </div>
                        <div className="listItems">
                            <FaPlane className='icons' />
                            <span>Flights</span>

                        </div>
                        <div className="listItems">
                            <FaCar className='icons' />
                            <span>Car Rentals</span>

                        </div>
                        <div className="listItems">
                            <FaHotel className='icons' />
                            <span>Attraction</span>

                        </div>
                        <div className="listItems">
                            <FaTaxi className='icons' />
                            <span>Airpot Taxis</span>

                        </div>

                    </div>
                   { type !=="list" &&
                   <>  <h1>Give us Chance to serve you? Have a look</h1>
                    <h4>Place where you feel more comfortable, grab a discount of 15%</h4>
                    <button className='btn'>SignIn / LogIn</button>

                    <div className="inputSection">
                        <div className="searchSection">
                            <FaBed className='icons' />
                            <input type="text" placeholder='Where you want to go?' className='headerInput' onChange={(e)=> setDestination([e.target.value])}/>
                        </div>

                        <div className="searchSection">
                            <ImCalendar className='icons' />
                            <span onClick={()=> setOpenDate (!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                           {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='calendar'
                            />}
                        </div>

                        <div className="searchSection">
                            <BsFillPersonFill className='icons' />
                            <span onClick={()=> setOpen(!open)}>{`${option.adult} adult. ${option.children} children. ${option.room} room`}</span>
                           {open &&<div className="optionPerson">  
                                <div className="listPerson">
                                   <span>Adult</span>
                                   <div className="counterOption">
                                   <button onClick={()=> handleSumbit("adult", "d")}>-</button>
                                  
                                   <span>{option.adult}</span>
                                   <button onClick={()=> handleSumbit("adult", "i") }>+</button>
                                   </div>
                                </div>
                                <div className="listPerson">
                                   <span>Child</span>
                                   <div className="counterOption">
                                   <button onClick={()=> handleSumbit("children", "d") }>-</button>
                                   <span>{option.children}</span>
                                   <button onClick={()=> handleSumbit("children", "i") }>+</button>
                                   </div>

                                </div>
                                <div className="listPerson">
                                   <span>Room</span>
                                   <div className="counterOption">
                                   <button onClick={()=> handleSumbit("room", "d") }>-</button>
                                   <span>{option.room}</span>
                                   <button onClick={()=> handleSumbit("room", "i") }>+</button>
                                   </div>
                                </div>
                               
                            </div>}
                        </div>
                        <button className="btn"  onClick={handleSearch}>Search</button>
                    </div>
                    </> }      </div>
            </div></>
    )
}

export default Header