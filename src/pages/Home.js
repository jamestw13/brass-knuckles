import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { imageData } from '../assets/images/imageData';

function formatDate(dateString) {
  return `${dayjs(dateString).format('MMMM D')}`;
}

function Home({ scheduleData }) {
  const images = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * imageData.length);
    images.push(imageData[randomNumber]);
  }

  function getUpcomingEvents(item) {
    const eventDate = new Date(item.Date);
    const currentDate = new Date();
    return eventDate >= currentDate;
  }

  const upcomingSchedule = scheduleData
    ?.filter(item => getUpcomingEvents(item))
    .slice(0, 3);

  return (
    <div className='page'>
      <h1 className='page-header ff-sans-norm '>
        Brass Knuckles Quintet and Percussion
      </h1>

      <section className='card card-right'>
        <p className='fs-400 ff-sans-cond p-1'>
          Brass Knuckles is a five to six piece brass ensemble proudly centered
          in Madison, Wisconsin. The group is extremely versatile, playing music
          of many different styles to suit the diverse events they are called to
          perform. From renaissance madrigals to dixieland, Bach fugues to
          contemporary pop charts, Brass Knuckles delights their audiences.
        </p>

        <Link to='/about'>
          <p className='text-accent p-1'>Learn More</p>
        </Link>
      </section>

      <section className='card card-left image-scroller-container'>
        <div className='image-scroller scroll-snap'>
          {images.map(
            (image, index) =>
              image.id && (
                <Link to='/gallery' key={index}>
                  <div key={index} className='image-element'>
                    <img
                      src={require(`../assets/images/${image.id}.jpg`)}
                      alt=''
                    />
                  </div>
                </Link>
              )
          )}
        </div>
      </section>

      <section className='card card-right'>
        <h3 className='uppercase fs-500'>Next performances</h3>
        {scheduleData ? (
          upcomingSchedule.map((show, index) => {
            const { ID, Date, Location } = show;
            return (
              <Link to={`/schedule#${ID}`} key={index}>
                <div className='event-row event-row-home' id={ID} key={index}>
                  <p>{formatDate(Date)}</p>

                  <p>{Location}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
        <Link to='schedule'>
          <p className='text-accent p-1'>See details and more dates</p>
        </Link>
      </section>
    </div>
  );
}

export default Home;
