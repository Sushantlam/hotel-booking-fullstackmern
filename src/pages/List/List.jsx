import React, { useState } from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Header from '../../Component/Header/Header'
import { useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range'; // theme css file
import { format } from 'date-fns';

import "./List.css"
import Hotellist from '../../Component/Hotellist/Hotellist';
const List = () => {
  const location = useLocation()
  console.log(location)

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)

  return (
    <>
      <div className="list">
        <Navbar />
        <Header type="list" />

        <div className="list-item">
          <div className="seacrh-list-items">
            <div className="search">
              <h3>Search</h3>
              <div className="ls-search">
                <label htmlFor="">Destination/property name:</label>
                <input type="text" placeholder={destination} />

              </div>
              <div className="ls-search">
                <label htmlFor="">Check in-out date:</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

                {openDate && <DateRange
                  className='searchCalendar'
                  onChange={item => setDate([item.selection])}
                      minDate={new Date()}
                  ranges={date}
                  
                />}


              </div>
              <div className="ls-search">
                <h4>Options</h4>
                <div className="options">
                  <span>Min price <small>per night</small></span>
                  <input type="number"    />
                </div>
                <div className="options">
                  <span>Max price <small>per night</small></span>
                  <input type="number"  />
                </div>
                <div className="options">
                  <span>Adult</span>
                  <input type="number" placeholder={option.adult} min={1}/>
                </div>
                <div className="options">
                  <span>Children</span>
                  <input type="number" placeholder={option.children} min={0} />
                </div>
                <div className="options">
                  <span>Rooms</span>
                  <input type="number" placeholder={option.room} min={1} />
                </div>
              </div>
             <div className="searchbtn">
              <button className='searchBtn'>Search</button>
             </div>
            </div>
            <div className="hotel">
            <Hotellist/>
            
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default List