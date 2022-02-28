import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <h2>About</h2>
      <p>Information about Brass Knuckles</p>
      <Link to='/members'>About our members</Link>
    </>
  );
}

export default About;
