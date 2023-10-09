import './App.css';
import Booking from './Booking.js'
import ViewBookings from './ViewBookings.js'
import Homepage from './Homepage';
import About from './About';
import Logo from './Logo';
import axios from 'axios';
import React, {  useRef, useState } from 'react'
import { MdOutlineExitToApp } from 'react-icons/md'
import { BsArrowBarLeft } from 'react-icons/bs'
import { RiMenuFill } from 'react-icons/ri'
import $ from 'jquery';

const server = 'http://localhost:4000/'
// const server = 'https://ch-server-ul9n.onrender.com/'


function App() {
  const [bookings, setBookings] = useState(null);
  const [makeApt, setMakeApt] = useState(false)
  const [about, setAbout] = useState(false)
  const [logoOpac, setLogo] = useState(0)
  const [triggerScroll, setTrigger] = useState(false)
  const [login, setLogin] = useState(false);
  const loginUsername = useRef(null)
  const loginPassword = useRef(null)
  const [waitingLogin, setWaitingLogin] = useState(false)
  const [bookingsRefreshing, setBookingsRefreshing] = useState(false);
  const [auth, setAuth] = useState(false);

  function getBooking() {
    axios.get(`${server}getBookings`)
      .then(res => {
        setAuth(true)
        setWaitingLogin(false)
        setLogin(false)
        setBookings(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  function tryLogin(e) {
    e.preventDefault();
    setWaitingLogin(true)
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    axios.post(`${server}login`, {name: username, pw: password})
      .then(res => {
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

  function deleteAppt(aptid) {
    setBookingsRefreshing(true)
    axios.post(`${server}deleteBooking`, {id: aptid})
    .then((res)=>{
        setBookingsRefreshing(false)
        setBookings(res.data)
      })
      .catch((err) => {
        setBookingsRefreshing(false)
        console.log(err)
      })
  }

  function toggleMenu() {
    $('.App').toggleClass('slideLeft')
  }
  
  function linkHome() {
    setNavColour(0)
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

  function closeApts() {
    linkHome()
  }
  
  function closeBookings() {
    linkHome()
  }

  function doSetLogo(x) {
    setLogo(x)
  }

  function setNavColour(i) {
    if (i < 1) {
      $('#nav').css('color', 'white')
      $('#logoImg').removeClass('blackImg')
    } else if (i > 0) {
      $('#nav').css('color', 'black')
      $('#logoImg').addClass('blackImg')
    }
  }

  function initInput(e) {
    e.target.style.border = '1px solid #00000033'
  }

  return (
    <div className="App">
      <div className="sideMenu">
        <ul>
          <BsArrowBarLeft style={{marginTop: '10px'}} onClick={toggleMenu} />
          <li onClick={() => {toggleMenu(); linkHome();}}>Home</li>
          <li onClick={() => {toggleMenu(); linkAbout()}}>About Us</li>
          <li onClick={() => {toggleMenu(); linkBook();}}>Book a Consultation</li>
        </ul>
      </div>
      <div className="navbar" id='nav'>
          <Logo clicked={linkHome} opac={logoOpac} type={'nav'} />
          <ul style={{opacity: logoOpac}}>
            <li onClick={linkHome}>Home</li>
            <li onClick={linkAbout}>About Us</li>
            <li onClick={linkBook}>Book a Consultation</li>
          </ul>
          <div style={{opacity: 1-logoOpac, position: 'absolute', right: '30px', fontSize: 'clamp(12px, 2vw, 1rem)'}} onClick={()=>{setLogo(1); if(auth) {getBooking()} else {setLogin(true)}}}><MdOutlineExitToApp /></div>
          <div className="menuButton" onClick={toggleMenu}><RiMenuFill /></div>
      </div>

      <Homepage 
        forceToTop={triggerScroll}
        doSetLogo={doSetLogo}
        setNavColour={setNavColour}
        about={linkAbout}
        book={linkBook}
        aboutTrigger={about}
      />

      {bookings ?
        <div className="overPage" style={{justifyContent: 'center'}}>
          <ViewBookings bookings={bookings} del={deleteAppt} close={closeApts} refreshing={bookingsRefreshing} />
        </div> :
        makeApt?
          <div className="page" style={{justifyContent: 'center'}}>
            <Booking key='bookingKey' close={closeBookings} server={server} />
          </div>:
        about?
          <div className="overPage">
            <About close={() => {setAbout(false); linkHome()}} />
          </div>:
        login?
          <div className="overPage" style={{justifyContent: 'center'}}>
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
