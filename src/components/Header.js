import React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from './LogoSVG';

function Header() {
  return (
    <nav className='flex bg-dark'>
      <a href='/'>
        <LogoSVG />
      </a>
      <div className='nav-buttons'>
        <a href='/'>Home</a>

        <a href='/about'>About</a>

        <a href='/members'>Members</a>

        <a href='/schedule'>Schedule</a>

        <a href='/gallery'>Gallery</a>

        <a href='/contact'>Contact</a>
      </div>
    </nav>
  );
}

export default Header;
