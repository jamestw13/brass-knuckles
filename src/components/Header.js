import React from 'react';
import { Link } from 'react-router-dom';

import LogoSVG from './LogoSVG';

function Header() {
  return (
    <nav className="flex bg-dark text-accent header-bar">
      <Link to="/">
        <LogoSVG />
      </Link>
      <div className="nav-buttons flex">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        {/* <Link to='/members'>
          <p>Members</p>
        </Link> */}
        <Link to="/schedule">
          <p>Schedule</p>
        </Link>
        {/* <Link to ='/gallery'>
          <p >Gallery</p>
        </Link> */}
        {/* <Link to='/contact'>
          <p>Contact</p>
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;
