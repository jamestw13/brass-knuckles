import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section>
      <h2>Members</h2>

      <article className='member'>
        <div>
          <h3>Alex Bauer</h3>
          <h4>Trombone</h4>
        </div>
        <img className='member-image' src={require(`../assets/images/1.jpg`)} />
      </article>
      <article className='member'>
        <div>
          <h3>Dan Cross</h3>
          <h4>Trumpet</h4>
        </div>
      </article>
      <article className='member'>
        <div>
          <h3>TJ James</h3>
          <h4>Trumpet</h4>
        </div>
      </article>
      <article className='member'>
        <div>
          <h3>Jim Latimer</h3>
          <h4>Percussion</h4>
        </div>
      </article>
      <article className='member'>
        <div>
          <h3>Craig Mason</h3>
          <h4>Horn</h4>
        </div>
      </article>
      <article className='member'>
        <div>
          <h3>Karl Zelle</h3>
          <h4>Tuba</h4>
        </div>
      </article>
    </section>
  );
}

export default About;
