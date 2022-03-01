import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function Schedule() {
  const [scheduleData] = useState([
    {
      date: '4-16',
      event: 'Easter Vigil',
      location: 'St. Patrick Church',
      city: 'Madison, WI',
    },
    {
      date: '4-17',
      event: 'Easter',
      location: 'St. Patrick Church',
      city: 'Madison, WI',
    },
    {
      date: '5-27',
      event: 'Concert',
      location: 'Oakwood West PAC',
      city: 'Madison, WI',
    },
    {
      date: '7-20',
      event: 'Concert in the Park',
      location: 'Central Park',
      city: 'Edgerton, WI',
    },
    {
      date: '7-22',
      event: 'Concert',
      location: 'Oakwood West Courtyard',
      city: 'Madison, WI',
    },
    {
      date: '7-27',
      event: 'Concert in the Park - Rain date',
      location: 'Central Park',
      city: 'Edgerton, WI',
    },
    {
      date: '7-29',
      event: 'Concert',
      location: 'Oakwood East',
      city: 'Madison, WI',
    },
  ]);

  return (
    <section>
      <h2>Schedule</h2>
      {console.log(scheduleData)}
      {scheduleData.map((event, index) => {
        return (
          <div className='event-row' key={index}>
            <p>{event.date}</p>
            <p>{event.event}</p>
            <p>{event.location}</p>
            <p>{event.city}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Schedule;
