import './App.css';
import Booking from './Booking.js'
import ViewBookings from './ViewBookings.js'
import Homepage from './Homepage';
import About from './About';
import Logo from './Logo';
import axios from 'axios';
import React, { useRef, useState } from 'react'
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
  const [login, setLogin] = useState(false);
  const loginUsername = useRef(null)
  const loginPassword = useRef(null)
  const [waitingLogin, setWaitingLogin] = useState(false)
  const [bookingsRefreshing, setBookingsRefreshing] = useState(false);
  const [auth, setAuth] = useState(false);

  function toggleMenu() {
    $('.App').toggleClass('slideLeft')
  }

  function deleteAppt(aptid) {
    setBookingsRefreshing(true)
    axios.post('https://ch-server-ul9n.onrender.com/deleteBooking', {id: aptid})
    .then((res)=>{
        setBookingsRefreshing(false)
        setBookings(res.data)
      })
      .catch((err) => {
        setBookingsRefreshing(false)
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
    setLogin(false);
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
    linkHome()
  }
  
  function closeBookings() {
    linkHome()
  }

  function getBooking() {
    axios.get('https://ch-server-ul9n.onrender.com/getBookings')
      .then(res => {
        setAuth(true)
        setWaitingLogin(false)
        setLogin(false)
        setBookings(res.data);
      })
      .catch(err => {
        setWaitingLogin(false)
        if (err.response.data.error === 'name') {
          loginUsername.current.style.border = '1px solid red'
        } else if (err.response.data.error === 'pw') {
          loginPassword.current.style.border = '1px solid red'
        } else {
          loginPassword.current.style.border = '1px solid red'
          loginUsername.current.style.border = '1px solid red'
        }
      })
  }

  function tryLogin(e) {
    e.preventDefault();
    setWaitingLogin(true)
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    axios.post('https://ch-server-ul9n.onrender.com/login', {name: username, pw: password})
      .then(res => {
        console.log(res)
        setAuth(true)
        setWaitingLogin(false)
        setLogin(false)
        setBookings(res.data);
      })
      .catch(err => {
        console.log(err)
        setWaitingLogin(false)
        if (err.response.data.error === 'name') {
          loginUsername.current.style.border = '1px solid red'
        } else if (err.response.data.error === 'pw') {
          loginPassword.current.style.border = '1px solid red'
        } else {
          loginPassword.current.style.border = '1px solid red'
          loginUsername.current.style.border = '1px solid red'
        }
      })
  }

  function initInput(e) {
    e.target.style.border = '1px solid #00000033'
  }

  return (
    <div className="App">
      <div className="sideMenu">
        <ul>
          <li onClick={() => {toggleMenu(); linkHome();}}>Home</li>
          <li onClick={() => {toggleMenu(); linkAbout()}}>About Us</li>
          <li onClick={() => {toggleMenu(); linkBook();}}>Book a Consultation</li>
          <li onClick={() => {toggleMenu(); setLogo(1); setLogin(true)}}><MdOutlineExitToApp /></li>
        </ul>
      </div>
      <div className="navbar" id='nav'>
          <Logo logoClick={linkHome} opac={logoOpac} type={'nav'} triggerFade={logoTriggerFade}/>
          <ul>
            <li onClick={linkHome}>Home</li>
            <li onClick={linkAbout}>About Us</li>
            <li onClick={linkBook}>Book a Consultation</li>
            <li onClick={()=>{setLogo(1); if(auth) {getBooking()} else {setLogin(true)}}} style={{transform: 'translateY(2px)'}}><MdOutlineExitToApp /></li>
          </ul>
          <div className="menuButton" onClick={toggleMenu}><RiMenuFill /></div>
      </div>

      <Homepage scrolled={scrolled} forceToTop={triggerScroll} makeNavBlack={blackNav} makeNavWhite={whiteNav}/>
      <Logo logoClick={()=>{}} opac={1 - logoOpac} type={'home'} triggerFade={logoTriggerFade}/>

      {bookings ?
        <div className="page" style={{justifyContent: 'center'}}>
          <ViewBookings bookings={bookings} del={deleteAppt} close={closeApts} refreshing={bookingsRefreshing} />
        </div> :
        makeApt?
          <div className="page" style={{justifyContent: 'center'}}>
            <Booking key='bookingKey' close={closeBookings} />
          </div>:
        about?
          <div className="page">
            <About close={() => {setAbout(false); linkHome()}} />
          </div>:
        login?
          <div className="page" style={{justifyContent: 'center'}}>
            <div className="darkBackdrop" onClick={(e) => {if (e.target === e.currentTarget) {linkHome()}}}></div>
            <form className="loginBox" onSubmit={tryLogin}>
              <span>Username</span>
              <input type="text" name="username" ref={loginUsername} required onChange={initInput} />
              <span>Password</span>
              <input type="password" name="password" ref={loginPassword} required onChange={initInput} />
              <button type="submit">{waitingLogin?<div className="loading"></div>:'Login'}</button>
            </form>
          </div>
        :<></>
        }

    </div>
  );
}

export default App;
