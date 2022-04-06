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
    <div className='grid'>
      <h1 className='page-header uppercase ff-sans-norm fs-600'>
        Brass Knuckles Quintet and Percussion
      </h1>

      <section className='card'>
        <p className='fs-400 ff-sans-cond p-1'>
          Brass Knuckles is a five to six piece brass ensemble proudly centered
          in Madison, Wisconsin. The group is extremely versatile, playing music
          of many different styles to suit the diverse events they are called to
          perform. From renaissance madrigals to dixieland, Bach fugues to
          contemporary pop charts, Brass Knuckles delights their audiences.
        </p>

        <Link className='text-accent p-1' to='/about'>
          Learn More
        </Link>
      </section>

      <div className='grid grid-row'>
        <section className='card'>
          <h2>photos</h2>
        </section>

        <section className='card'>
          <h3 className='uppercase fs-500'>Next shows</h3>
          {scheduleData ? (
            upcomingSchedule.map((show, index) => {
              if (index < 3) {
                const { date, city, location } = show;
                return (
                  <div className='event-row event-row-home' key={index}>
                    <p>{formatDate(date)}</p>
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
      </div>
    </div>
  );
}

export default Home;
