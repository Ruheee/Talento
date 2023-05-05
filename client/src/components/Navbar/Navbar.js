import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title-container">
        <h1 className="title">Talento</h1>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div>
      <div className="buttons-container">
        <a href="#" className="nav-link">Careers</a>
        <a href="#" className="nav-link">Messages</a>
        <a href="#" className="nav-link">Freelance</a>
        <a href="#" className="login-button">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
