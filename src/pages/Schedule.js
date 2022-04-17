import React from 'react';

import dayjs from 'dayjs';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Schedule({ scheduleData }) {
  return (
    <div className='page'>
      <h1 className='page-header'>{dayjs().year()} Schedule</h1>

      <section className='card'>
        <div className='schedule-grid'>
          {scheduleData ? (
            scheduleData.map((show, index) => {
              const { ID, Date, Type, City, Location, WebLink } = show;
              return (
                <div
                  href={WebLink}
                  id={ID}
                  key={index}
                  className='event-row event-row-schedule fs-400'
                >
                  <p>{formatDate(Date)}</p>
                  <p>{Type}</p>
                  <p>{City}</p>
                  <p>{Location}</p>
                  {WebLink && <a href={WebLink}>Event Link</a>}
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
