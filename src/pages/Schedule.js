import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import csv from 'csvtojson';
import dayjs from 'dayjs';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Schedule({ scheduleData }) {
  return (
    <section>
      <h2>{dayjs().year()} Schedule</h2>
      <div className='grid schedule-grid'>
        {scheduleData ? (
          scheduleData.map((show, index) => {
            const { date, event, city, location } = show;
            return (
              <>
                <p>{formatDate(date)}</p>
                <p>{event}</p>
                <p>{city}</p>
                <p>{location}</p>
              </>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </section>
  );
}

export default Schedule;
