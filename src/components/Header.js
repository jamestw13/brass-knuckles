import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h1>Brass Knuckles</h1>
      <div className='nav-buttons'>
        <button>
          <Link to='/about'>About</Link>
        </button>
        <button>
          <Link to='/members'>Members</Link>
        </button>
        <button>
          <Link to='/about'>Schedule</Link>
        </button>
        <button>
          <Link to='/gallery'>Gallery</Link>
        </button>
        <button>
          <Link to='/contact'>Contact</Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
