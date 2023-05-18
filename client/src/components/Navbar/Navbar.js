import React from 'react';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import Logout from '../LogoutBtn';


const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { email, picture } = user || {};

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
        <a href="https://localhost:3006/messages" className="nav-link">Messages</a>
        <a href="#" className="nav-link">Freelance</a>
        <img src={picture} className='user-avatar'/>
        <span className="nav-link">{email}</span>
        {!isAuthenticated && <a href="https://localhost:3006/login" className="login-button">Login</a>}
        {user && <Logout />}
      </div>
    </div>
  );
};

export default Navbar;
