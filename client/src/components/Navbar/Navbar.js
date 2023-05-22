import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from '../LogoutBtn';


const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const { email } = user || {};
  const avatar = `${process.env.PUBLIC_URL}/avatar.jpg`;

  return (
    <div className="navbar">
      <div className="title-container">
        <a href="/" className="title">Talento</a>
      </div>
      {/* <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
      </div> */}
      <div className="buttons-container">
        <a href="/job_listing" className="nav-link">Find Jobs</a>
        <a href="/messages" className="nav-link">Messages</a>
        <a href="/resume" className="nav-link">My Resume</a>
        {isAuthenticated && <img src={avatar} className='user-avatar' />}
        <span className="nav-link">{email}</span>
        {!isAuthenticated ? <a href="/login" className="login-button">Login</a> : <Logout />}
      </div>
    </div>
  );
};

export default Navbar;
