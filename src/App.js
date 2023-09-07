import './App.css';
import Booking from './Booking.js'
import ViewBookings from './ViewBookings.js'
import Homepage from './Homepage';
import About from './About';
import Logo from './Logo';
import axios from 'axios';
import React, { useState } from 'react'
import { MdOutlineExitToApp } from 'react-icons/md'
import { RiMenuFill } from 'react-icons/ri'
import $ from 'jquery';


function App() {

  const [bookings, setBookings] = useState(null);
  const [makeApt, setMakeApt] = useState(false)
  const [about, setAbout] = useState(false)
  const [logoOpac, setLogo] = useState(0)
  const [triggerScroll, setTrigger] = useState(false)
  const [logoTriggerFade, setLogoTrigger] = useState(false)

  function toggleMenu() {
    $('.App').toggleClass('slideLeft')
  }

  function getBookings() {
    axios.get('http://localhost:4000/getBookings')
    .then(res => {
          setBookings(res.data);
        })
        .catch(err => {
            console.log(err)
        })
  }

  function deleteAppt(aptid) {
    axios.post('http://localhost:4000/deleteBooking', {id: aptid})
      .then(()=>{
        getBookings();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function whiteNav() {
    $('#nav').css('color', 'white')
    setLogoTrigger(!logoTriggerFade)
    $('#logoImg').removeClass('blackImg')
  }

  function blackNav() {
    $('#nav').css('color', 'black')
    $('#logoImg').addClass('blackImg')
  }
  
  function linkHome() {
    whiteNav();
    setAbout(false)
    setBookings(null);
    setMakeApt(false)
    setTrigger(!triggerScroll);
    setLogo(0)
  }

  function linkBook() {
    setBookings(null);
    setMakeApt(true);
    setLogo(1);
  }

  function linkAbout() {
    linkHome();
    setLogo(1);
    setAbout(true);
  }

  function scrolled() {
    setLogo(p => Math.abs(p-1))
  }

  function closeApts() {
    setBookings(null)
  }

  function closeBookings() {
    setMakeApt(false)
  }

  return (
    <div className="App">
      <div className="sideMenu">
        <ul>
          <li onClick={() => {toggleMenu(); linkHome();}}>Home</li>
          <li onClick={() => {toggleMenu(); linkAbout()}}>About Us</li>
          <li onClick={() => {toggleMenu(); linkBook();}}>Book a Consultation</li>
          <li onClick={() => {toggleMenu(); whiteNav(); getBookings()}}><MdOutlineExitToApp /></li>
        </ul>
      </div>
      <div className="navbar" id='nav'>
          <Logo logoClick={linkHome} opac={logoOpac} type={'nav'} triggerFade={logoTriggerFade}/>
          <ul>
            <li onClick={linkHome}>Home</li>
            <li onClick={linkAbout}>About Us</li>
            <li onClick={linkBook}>Book a Consultation</li>
            <li onClick={getBookings} style={{transform: 'translateY(2px)'}}><MdOutlineExitToApp /></li>
          </ul>
          <div className="menuButton" onClick={toggleMenu}><RiMenuFill /></div>
      </div>

      <Homepage scrolled={scrolled} forceToTop={triggerScroll} makeNavBlack={blackNav} makeNavWhite={whiteNav}/>
      <Logo logoClick={()=>{}} opac={1 - logoOpac} type={'home'} triggerFade={logoTriggerFade}/>

      {bookings ?
        <div className="page">
          <ViewBookings bookings={bookings} del={deleteAppt} close={closeApts} />
        </div> :
        makeApt?
          <div className="page" style={{justifyContent: 'center'}}>
            <Booking key='bookingKey' close={closeBookings} />
          </div>:
        about?
          <div className="page">
            <About close={() => {setAbout(false); linkHome()}} />
          </div>:<></>
        }

    </div>
  );
}

export default App;
