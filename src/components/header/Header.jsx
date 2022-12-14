import './header.css'
import {faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

const Header = () => {

  const [open, setOpen] = useState(false)

  const [openRoom, setOpenRoom] = useState(false)

  const [options, setOptions] = useState ({
    adult: 1,
    children: 0,
    room: 1
  })

  const [date, setDate] = useState ([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  return (
    <div className='header'>
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels unlock instant savings of 10% or more with a free Lamabooking account.
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input 
            type='text' 
            placeholder='where are you going?' 
            className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={()=>setOpen(!open)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yy")} to ${format(date[0].endDate, "MM/dd/yy")}`}</span>
            {open&&<DateRange
              className='date'
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={()=> setOpenRoom(!openRoom)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openRoom&&<div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button disabled={options.adult<=1} onClick={()=> setOptions({...options, adult: options.adult-1})} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button onClick={()=> setOptions({...options, adult: options.adult+1})} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button disabled={options.children<=0} onClick={()=> setOptions({...options, children: options.children-1})} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button onClick={()=> setOptions({...options, children: options.children+1})} className="optionCounterButton">+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button disabled={options.room<=1} onClick={()=> setOptions({...options, room: options.room-1})} className="optionCounterButton">-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button onClick={()=> setOptions({...options, room: options.room+1})} className="optionCounterButton">+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header