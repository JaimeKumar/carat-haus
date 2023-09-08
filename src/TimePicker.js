import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import Reciept from './Reciept';
import {add, format} from "date-fns"

export default function TimePicker({date, backToCalendar}) {

  const [timeslots, setSlots] = useState(null)
  const [reqSuccess, setSuccess] = useState(null)
  const [reqFail, setFail] = useState(false)
  const [loading, setLoading] = useState(false)

  function getTimes() {
    if (!date) return
    
    const open = add(date, {hours: 9})
    const close = add(date, {hours: 18})
    const interval = 30;
    const times = [];
    for (let i = open; i < close; i = add(i, {minutes: interval})) {
      if (takenSlots.map(t=>format(new Date(t.timeslot), 'kk:mm')).includes(format(i, 'kk:mm'))) continue;
      times.push(i)
    }
    
    return times;
  }
  
  const [time, setTime] = useState(null);
  const [takenSlots, setTaken] = useState([])
  
  useEffect(() => {
    axios.get('https://ch-server-ul9n.onrender.com/getBookings')
    .then(res => {
      setTaken(res.data.filter(s=>format(new Date(s.timeslot), 'do MMM y')===format(new Date(date), 'do MMM y')))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    setSlots(getTimes());
  }, [takenSlots])

  
  const nameInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const emailInputRef = useRef(null);

  function goBack() {
    backToCalendar();
  }

  function tryReq() {
    let name = nameInputRef.current.value;
    let number = numberInputRef.current.value;
    let email = emailInputRef.current.value;

    if (!time) {
      $('#errTime').css('display', 'flex')
    } else {
      $('#errTime').css('display', 'none')
    }
    
    if (!name) {
      $('#errName').css('display', 'flex')
    } else {
      $('#errName').css('display', 'none')
    }
    
    if (!number) {
      $('#errNumber').css('display', 'flex')
    } else {
      $('#errNumber').css('display', 'none')
    }
    
    if (!email) {
      $('#errEmail').css('display', 'flex')
    } else {
      $('#errEmail').css('display', 'none')
    }

    if (time && name && email && number) {
      setLoading(true)
      axios.post('https://ch-server-ul9n.onrender.com/book', {
      // date: date,
      name: name,
      time: time,
      email: email,
      number: number
      })
          .then(res => {
              setLoading(false)
              setSuccess({...res.data})
              console.log(res.data)
            })
            .catch(err => {
              setLoading(false)
              setFail(true)
              console.log(err)
          })
    }
  }

  return (
    reqSuccess ? <Reciept res={reqSuccess} /> :
    reqFail ? <div className="failMessage">
      <h1>Sorry</h1>
      <p>Something went wrong on our end and we failed to properly store your booking.</p>
      <p>However, your request is in our system and we are working on fixing the issue. When we do, we will contact you to properly schedule your appointment.</p>
      <p>In the meantime, please feel free to try again.</p>
      <button onClick={() => {setFail(false)}}>Try again</button>
    </div> :
        <div className='timepicker'>
          <div className="dialog">
            <button id="backButton" className='smallButton' onClick={goBack}>{`< Back`}</button>
            <span>Date:</span>
            <p className='smallMsg'>{format(date, 'E do MMM y')}{time?' at ' + format(time, 'kk:mm'):''}</p>
            <span>Time:</span>
            <p className='errorMsg' id='errTime'>Please select a time slot</p>
            {timeslots?
              <div className="timeslots">
                {timeslots.map((timeslot, i) => (
                  <div className={(time && format(time, 'kk:mm') === format(timeslot, 'kk:mm'))? "slot selected" : "slot"} onClick={() => {setTime(timeslot); console.log('slot: ' + timeslot)}}>{format(timeslot, 'kk:mm')}</div>
                ))}
              </div>
              : <span><small>Getting available appointment times...</small></span>
            }
            <span>Name:</span>
            <p className='errorMsg' id='errName'>Please enter your name</p>
            <input ref={nameInputRef} type="text" id="nameInput" required />
            <span>Phone Number:</span>
            <p className='errorMsg' id='errNumber'>Please enter your phone number</p>
            <input ref={numberInputRef} type="tel" id="phoneInput" required />
            <span>Email:</span>
            <p className='smallMsg' style={{marginTop: '-5px', fontSize: '0.8rem'}}>If we can't reach you by phone</p>
            <p className='errorMsg' id='errEmail'>Please enter your email address</p>
            <input ref={emailInputRef} type="email" id="emailInput" required />
            <button className='requestCallButton' onClick={tryReq}>{loading?<div className="loading"></div>:'Request Call'}</button>
          </div>
        </div>
      
  )
}
