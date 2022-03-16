import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import csv from 'csvtojson';
import dayjs from 'dayjs';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Schedule() {
  const [scheduleData, setScheduleData] = useState(null);

  const url =
    'https://docs.google.com/spreadsheets/d/17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME/export?format=csv';
  const section = document.querySelector('section');

  useEffect(() => {
    fetch(url)
      .then(result => result.text())
      .then(csvText => csv().fromString(csvText))
      .then(data => setScheduleData(data));
  }, []);

  //   [
  //   {
  //     date: '4-16',
  //     event: 'Easter Vigil',
  //     location: 'St. Patrick Church',
  //     city: 'Madison, WI',
  //   },
  //   {
  //     date: '4-17',
  //     event: 'Easter',
  //     location: 'St. Patrick Church',
  //     city: 'Madison, WI',
  //   },
  //   {
  //     date: '5-27',
  //     event: 'Concert',
  //     location: 'Oakwood West PAC',
  //     city: 'Madison, WI',
  //   },
  //   {
  //     date: '7-20',
  //     event: 'Concert in the Park',
  //     location: 'Central Park',
  //     city: 'Edgerton, WI',
  //   },
  //   {
  //     date: '7-22',
  //     event: 'Concert',
  //     location: 'Oakwood West Courtyard',
  //     city: 'Madison, WI',
  //   },
  //   {
  //     date: '7-27',
  //     event: 'Concert in the Park - Rain date',
  //     location: 'Central Park',
  //     city: 'Edgerton, WI',
  //   },
  //   {
  //     date: '7-29',
  //     event: 'Concert',
  //     location: 'Oakwood East',
  //     city: 'Madison, WI',
  //   },
  // ]

  return (
    <section>
      <h2>Schedule</h2>

      {scheduleData ? (
        scheduleData.map((show, index) => {
          const { date, event, city, location } = show;
          return (
            <div className='event-row' key={index}>
              <p>{formatDate(date)}</p>
              <p>{event}</p>
              <p>{city}</p>
              <p>{location}</p>
            </div>
          );
        })
      ) : (
        <h1>Loading</h1>
      )}
    </section>
  );
}

export default Schedule;
