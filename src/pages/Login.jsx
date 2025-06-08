// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    // This is our "fake" login logic.
    // In a real app, you would send this to a server for validation.
    if (username && password) {
      // 1. Save the logged-in state to localStorage.
      localStorage.setItem('isLoggedIn', 'true');
      
      // 2. Redirect the user to the home page.
      navigate('/'); 
    } else {
      alert('Please enter a username and password.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Patient Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;