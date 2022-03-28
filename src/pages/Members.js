import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section>
      <h2>Members</h2>

      <article className='member'>
        <h3>Alex Bauer</h3>
      </article>
      <article className='member'>
        <h3>Dan Cross</h3>
      </article>
      <article className='member'>
        <h3>TJ James</h3>
      </article>
      <article className='member'>
        <h3>Jim Latimer</h3>
      </article>
      <article className='member'>
        <h3>Craig Mason</h3>
      </article>
      <article className='member'>
        <h3>Karl Zelle</h3>
      </article>
    </section>
  );
}

export default About;
