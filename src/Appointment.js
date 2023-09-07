import React from 'react'
import {format} from "date-fns"
import { FaTrash } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

export default function Appointment({appointment, deleteAppt, sw, emailNotif}) {

  function getFormat() {
    if (sw < 500) {
      return 'dd/MM/yy'
    } else if (sw < 600) {
      return 'dd MMM yy'
    } else if (sw < 700) {
      return 'do MMM y'
    } else {
      return 'E do MMM y';
    }
  }

  function getEmail() {
    navigator.clipboard.writeText(appointment.email);
    emailNotif()
  }

  return (
    <tr className='appointment'>
      <td>
        <span>{format(new Date(appointment.timeslot), getFormat())}</span>
      </td>

      <td>
        <span>{appointment.name}</span>
      </td>

      <td>
        <span>{format(new Date(appointment.timeslot), 'kk:mm')}</span>
      </td>

      <td>
        <a href={`tel: ${appointment.number}`}><FaPhoneAlt size={'14px'} />{sw>600?appointment.number:''}</a>
      </td>

      <td>
        <div className="apptButton" onClick={getEmail}>
          <MdAlternateEmail />
        </div>
      </td>

      <td>
        <div className="apptButton" onClick={() => {deleteAppt(appointment.id)}}>
          <FaTrash />
        </div>
      </td>
    </tr>
  )
}
