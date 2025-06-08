// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments'; // <-- 1. Import Appointments page
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '80px', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/appointments" element={<Appointments />} /> {/* <-- 2. Add the new route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;