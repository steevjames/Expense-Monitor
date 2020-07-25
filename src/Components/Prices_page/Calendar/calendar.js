import React from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function CustomCalendar() {
    return (
        <div
        
        ><Calendar onChange={value=>alert(value.getDate())}/></div>
    )
}

export default CustomCalendar
