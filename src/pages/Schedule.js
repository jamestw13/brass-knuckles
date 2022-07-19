import React from 'react';

import dayjs from 'dayjs';

// 17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Schedule({ scheduleData }) {
  return (
    <div className="page">
      <h1 className="page-header">{dayjs().year()} Schedule</h1>

      <section className="card">
        <div className="schedule-grid">
          {scheduleData ? (
            scheduleData.map((show, index) => {
              const { ID, Date, Type, City, Location, WebLink } = show;
              const divClass = dayjs().subtract(1, 'd').isBefore(Date)
                ? 'event-row event-row-schedule fs-400'
                : 'event-row event-row-schedule event-row-past fs-400';
              return (
                <div href={WebLink} id={ID} key={index} className={divClass}>
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
