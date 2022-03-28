import React from 'react';
import { Link } from 'react-router-dom';

import dayjs from 'dayjs';

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Home({ scheduleData }) {
  function getUpcomingEvents(item) {
    const eventDate = new Date(item.date);
    const currentDate = new Date();
    return eventDate >= currentDate;
  }

  const upcomingSchedule = scheduleData?.filter(item =>
    getUpcomingEvents(item)
  );

  return (
    <>
      <h1>Brass Knuckles Quintet and Percussion</h1>
      <section>
        <p>
          Brass Knuckles is a five to six piece brass ensemble proudly centered
          in Madison, Wisconsin. The group is extremely versatile, playing music
          of many different styles to suit the diverse events they are called to
          perform. From renaissance madrigals to dixieland, Bach fugues to
          contemporary pop charts, Brass Knuckles delights their audiences.
        </p>
        <p>
          <Link to='/about'>Learn More</Link>
        </p>
      </section>

      <section>
        <h2>photos</h2>
      </section>

      <section>
        <h3>Next shows</h3>
        {scheduleData ? (
          upcomingSchedule.map((show, index) => {
            if (index < 3) {
              const { date, event, city, location } = show;
              return (
                <div className='event-row' key={index}>
                  <p>{formatDate(date)}</p>
                  <p>{event}</p>
                  <p>{city}</p>
                  <p>{location}</p>
                </div>
              );
            }
          })
        ) : (
          <h1>Loading</h1>
        )}
        <Link to='schedule'>See details and more dates</Link>
      </section>
    </>
  );
}

export default Home;
