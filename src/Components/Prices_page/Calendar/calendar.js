import React from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function CustomCalendar(props) {
    return (
        <div>
            <Calendar onChange={value => props.changeDate(value)} />
        </div>
    )
}

export default CustomCalendar
