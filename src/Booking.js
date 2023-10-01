import React, { useEffect, useState } from 'react'
import TimePicker from './TimePicker';
import ReactCalendar from 'react-calendar';

export default function Booking({ close, server }) {
  
  const [date, setDate] = useState(null);

  return (
    <div className='centerCont'>
        <div className="darkBackdrop" onClick={(e) => {if (e.target === e.currentTarget) close()}}></div>
        {date ? 
            <TimePicker key='timePickerKey' date={date} backToCalendar={() => {setDate(null)}} server={server} />
        :
            <ReactCalendar key='calendarKey' minDate={new Date()} className={'react-calendar'} view='month' onClickDay={date => setDate(date)}/>
        }
    </div>
  )
}
