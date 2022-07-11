import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import {
  IoSearchOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
} from 'react-icons/io5';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <IoLogoFacebook className="social" />
        <IoLogoInstagram className="social" />
        <IoLogoTwitter className="social" />
        <IoLogoPinterest className="social" />
      </div>
      <ul className="navbar-item nav">
        <Link className="page-link" to="/">
          <li className="nav-item">HOME</li>
        </Link>
        <Link className="page-link" to="/">
          <li className="nav-item">ABOUT</li>
        </Link>
        <Link className="page-link" to="/">
          <li className="nav-item">CONTACT</li>
        </Link>
        <Link className="page-link" to="/edit">
          <li className="nav-item">WRITE</li>
        </Link>
        <Link className="page-link" to="/login">
          <li className="nav-item">LOGOUT</li>
        </Link>
      </ul>
      <div className="navbar-item">
        <Link className="page-link" to="/profile">
          <img
            src="https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Profile Identifier"
            className="dp"
          />
        </Link>
        <IoSearchOutline className="search-btn" />
      </div>
    </nav>
  );
};

export default Navbar;
