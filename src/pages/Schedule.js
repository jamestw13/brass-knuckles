import React from 'react';

import dayjs from 'dayjs';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Schedule({ scheduleData }) {
  return (
    <div className='grid'>
      <h1 className='page-header uppercase ff-sans-norm fs-600'>
        {dayjs().year()} Schedule
      </h1>
      <section className='card'>
        <div className='grid'>
          {scheduleData ? (
            scheduleData.map((show, index) => {
              const { date, event, city, location } = show;
              return (
                <div
                  key={index}
                  className='event-row event-row-schedule mi-3 fs-400'
                >
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
        </div>
      </section>
    </div>
  );
}

export default Schedule;
