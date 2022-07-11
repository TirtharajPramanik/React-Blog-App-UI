import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h5 className="heading-sub">React & Node</h5>
      <h2 className="heading">Blog</h2>
      <img
        className="header-bg"
        src="https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="background landscape"
      />
    </header>
  );
};

export default Header;
