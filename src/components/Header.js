import React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from './LogoSVG';

function Header() {
  return (
    <nav className='flex bg-dark text-accent header-bar'>
      <a href='/'>
        <LogoSVG />
      </a>
      <div className='nav-buttons flex'>
        <div>
          <a className='' href='/'>
            Home
          </a>
        </div>
        {/* <div>
          <a href='/about'>About</a>
        </div> */}
        <div>
          <a href='/members'>Members</a>
        </div>
        <div>
          <a href='/schedule'>Schedule</a>
        </div>
        <div>
          <a href='/gallery'>Gallery</a>
        </div>
        <div>
          <a href='/contact'>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
