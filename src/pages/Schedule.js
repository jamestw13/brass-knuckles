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
              const { Date, Type, City, Location } = show;
              return (
                <div
                  key={index}
                  className='event-row event-row-schedule mi-3 fs-400'
                >
                  <p>{formatDate(Date)}</p>
                  <p>{Type}</p>
                  <p>{City}</p>
                  <p>{Location}</p>
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
