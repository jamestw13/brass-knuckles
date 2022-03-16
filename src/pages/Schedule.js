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
