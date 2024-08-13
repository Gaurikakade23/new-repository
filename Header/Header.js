// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/GoPark.png';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="navlogo" src={logo} alt="Company Logo" width="95" height="105" />
        <input type="checkbox" id="menu-toggler" />
        <label htmlFor="menu-toggler" id="hamburger-btn" aria-label="Toggle navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
        </svg>
        </label>

        <ul className="all-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Features</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
