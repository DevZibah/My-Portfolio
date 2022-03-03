import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div>
      <nav className='navbar'>
        <h6 className='logo'>CHUKWUMA CHISOM</h6>
        <ul
          className={isMobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setIsMobile(false)}
        >
          <hr />
          <Link to='/' className='home'>
            <li>
              <h6>Home</h6>
            </li>
          </Link>
          <hr />
          <Link to='/About' className='home'>
            <li>
              <h6>About</h6>
            </li>
          </Link>
          <hr />
          <Link to='/Projects' className='home'>
            <li>
              <h6>Projects</h6>
            </li>
          </Link>
          <hr />
          <Link to='/Contact' className='home'>
            <li>
              <h6>Contact</h6>
            </li>
          </Link>
        </ul>
        <button
          className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </button>
      </nav>
    </div>
  )
}

export default Nav
