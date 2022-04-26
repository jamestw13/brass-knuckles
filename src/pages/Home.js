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
          contemporary pop charts, Brass Knuckles has something for every
          audience.
        </p>

        <Link to='/about'>
          <p className='text-accent p-1'>Learn More</p>
        </Link>
      </section>

      <section className='card news'>
        <h3 className='card-header'>News</h3>
        <div className='news-item'>
          <h3>Loud Quintet Up for Silent Auction</h3>
          <h4>April 25, 2022</h4>
          <p>
            In support of{' '}
            <a
              href='rockin4als.org'
              style={{
                color: 'hsl(var(--clr-dark)/.75)',
                textDecoration: 'underline',
                fontWeight: '600',
              }}
            >
              Rockin4ALS
            </a>
            , Brass Knuckles is donating a performance. The winner of the silent
            can book us for an hour long performance for an event of their
            choosing. The silent auction is happening during the 20th Annual
            Rockin For A Cure event happening on April 30th at the Wyndham
            Garden Madison Hotel.
            <br />
            Check out the{' '}
            <a
              href='https://www.facebook.com/events/325005082925550'
              style={{
                color: 'hsl(var(--clr-dark)/.75)',
                textDecoration: 'underline',
                fontWeight: '600',
              }}
            >
              Rockin For A Cure Facebook event
            </a>{' '}
            for more details.
          </p>
        </div>
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
        <h3 className='card-header'>Next performances</h3>
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
