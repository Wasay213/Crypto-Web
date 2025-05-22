import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleHomeClick = () => {
    console.log("Home button clicked!");
  };

  console.log("Navbar component rendered");

  return (
    <nav className="navbar">
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-google"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
      <ul className="nav-links">
        {/* Corrected NavLink usage */}
        <li>
          <NavLink 
            to="/home" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleHomeClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/pages" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Pages
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/exchange" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Exchange
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/features" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacts" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
