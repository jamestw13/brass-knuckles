import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <main>
      <h2>About</h2>
      <p>Information about Brass Knuckles</p>
      <Link to='/members'>About our members</Link>
      <br />
      <Link to='schedule'>See more performance dates</Link>
    </main>
  );
}

export default About;
