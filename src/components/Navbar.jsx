// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Doctor Appointment
        </Link>
        <ul className="navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add the new link here */}
          <li>
            <Link to="/appointments">My Appointments</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;