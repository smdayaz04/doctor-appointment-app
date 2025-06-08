// src/pages/Home.jsx
import React from 'react';
import DoctorCard from '../components/DoctorCard';
import './Home.css';

// --- STEP 1: Import all your images ---
import heroImage from '../assets/hero-image.png';
import docImg1 from '../assets/1.jpg'; // Make sure the path and filename are correct
import docImg2 from '../assets/2.jpg';
import docImg3 from '../assets/3.jpg';
import docImg4 from '../assets/4.avif';


// --- STEP 2: Use the imported images in your data array ---
const doctors = [
  { id: 1, name: 'Johnathan Doe', specialty: 'Cardiologist', image: docImg1 },
  { id: 2, name: 'Jane Smith', specialty: 'Dermatologist', image: docImg2 },
  { id: 3, name: 'Sam Wilson', specialty: 'Pediatrician', image: docImg3 },
  { id: 4, name: 'Emily Brown', specialty: 'Neurologist', image: docImg4 },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Your Health, My Priority</h1>
            <p>Seamlessly book appointments with the best doctors in your city. Quick, easy, and reliable.</p>
            <a href="#doctors" className="btn">Find a Doctor</a>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Doctors" />
          </div>
        </div>
      </header>

      {/* Doctors List Section */}
      <section id="doctors" className="doctors-section">
        <div className="container">
          <h2>Our Specialists</h2>
          <div className="doctors-grid">
            {/* The rest of the code remains the same */}
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;