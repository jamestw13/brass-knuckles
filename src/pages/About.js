import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='page'>
      <h1 className='page-header uppercase ff-sans-cond fs-600'>About</h1>

      <section className='card card-left about-page'>
        <p className='about-1 fs-400 ff-sans-cond p-1'>
          The Brass Knuckles Quintet and Percussion formed in 2016 by the
          members of a similar ensemble, Impact of Brass, which discontinued
          with the retirement of that group's leader and trumpeter, Sandy
          LaClair. That group enjoyed much success with the model of adding a
          percussionist to a traditional brass quintet and Impact of Brass
          members Craig Mason (horn), Jim Latimer (drums), Norm Bakker
          (trumpet), and Alex Bauer (trombone) created the Brass Knuckles.
        </p>

        <p className='about-2 fs-400 ff-sans-cond p-1'>
          The unique formation of brass quintet and percussion allows the group
          to perform for a more diverse set of venues and audiences. The group
          enjoys being centered in Madison, WI which hosts a rich music scene
          with many opportunities for performing a wide repertoire including
          both Mozart and Lady Gaga, from barn weddings to large historic
          churches.
        </p>
        <p className='about-3 fs-400 ff-sans-cond p-1'>
          The Brass Knuckles have been serving audiences all across southwestern
          Wisconsin from the Dells to up and down the Lake Michigan coast. They
          are a treat to see in parades and have featured performers at Old
          World Wisconsin since 2017.
        </p>
        <p className='about-4 fs-400 ff-sans-cond p-1'>
          Find our more{' '}
          <Link to='/members'>
            <span className='text-accent'>about the members </span>
          </Link>
          and check out our future
          <Link to='/schedule'>
            <span className='text-accent'> performance dates</span>
          </Link>
          .
        </p>

        <div className='about-image'>
          <img src={require('../assets/gallery-images/44.jpg')} alt='' />
        </div>
      </section>
    </div>
  );
}

export default About;
