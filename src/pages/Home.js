import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>Section with an overview, pictures, mini schedule</p>
      <Link to='/about'>About</Link>
      <Link to='/gallery'></Link>
    </>
  );
}

export default Home;
