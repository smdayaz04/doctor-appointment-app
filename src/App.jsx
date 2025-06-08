// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ import Footer
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Appointments from './pages/Appointments';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ marginTop: '80px', padding: '1rem', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking/:doctorId" element={<Booking />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ Always visible at bottom */}
    </div>
  );
}

export default App;
