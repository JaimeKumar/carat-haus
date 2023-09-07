import React from 'react'
import {format} from "date-fns"

export default function Reciept({res}) {
    const slot = new Date(res.timeslot);
  return (
    <div className="reciept">
        <h1>Appointment requested</h1>
        <p>We will be in touch via {res.number} or at {res.email} if we can't reach you by phone.</p>
        <p>You're call is booked for {format(slot, 'kk:mm')} on {format(slot, 'EEEE do MMMM y')}.</p>
    </div>
  )
}
