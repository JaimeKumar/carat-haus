import React, { useState } from 'react';
import Appointment from './Appointment';
import $ from 'jquery';


export default function ViewBookings({bookings, del, close}) {
  bookings.sort((a, b) => new Date(a.timeslot) - new Date(b.timeslot))
  
  var sw = window.innerWidth;
  const [sWidth, setWidth] = useState(sw);
  const [delID, setDelID] = useState(null)
  
  window.addEventListener('resize', (e) => {
    sw = window.innerWidth;
    setWidth(sw);
  })

  function openDel(id) {
    setDelID(id)
    $('#deletePrompt').css('display', 'flex')
  }
  
  function cancelDel() {
    setDelID(null)
    $('#deletePrompt').css('display', 'none')
  }
  
  function confirmDel() {
    if (delID) del(delID)
    $('#deletePrompt').css('display', 'none')
  }

  function notif() {
    $('#emailNotif').animate({opacity: 1}, 500)
    $('#emailNotif').animate({opacity: 0}, 3000)
  }

  return (
    <div className="centerCont">
      <div className="darkBackdrop" onClick={(e) => {if (e.target === e.currentTarget) close()}}></div>
      <div className="appointmentsCont">
        <h1>Appointments</h1>
        <div id="deletePrompt">
          <div className="deleteBox">
            <span>Are you sure you want to delete this appointment?</span>
            <div className="buttonrow">
              <button onClick={cancelDel}>Cancel</button>
              <button className='btnDel' onClick={confirmDel}>Delete</button>
            </div>
          </div>
        </div>
        <div id="emailNotif">
          Email copied to clipboard.
        </div>
        <table className='viewBookings'>
          {bookings.map(booking => {
            return <Appointment appointment={booking} deleteAppt={openDel} sw={sWidth} emailNotif={notif} />
          })}
        </table>
      </div>
    </div>
  )
}
