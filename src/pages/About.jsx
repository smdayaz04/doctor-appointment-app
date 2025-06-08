// src/pages/About.jsx
import React from 'react';
import './About.css';
// --- IMPORTANT: Update the path to your profile picture ---
import profilePic from '../assets/my_profile_pic.jpg'; 

const About = () => {
  return (
    <div className="about-page container">
      <div className="about-header">
        <h1>About the Creator</h1>
        <p>The mind and motivation behind this project.</p>
      </div>

      <div className="about-content">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Shaik Mohammed Ayaz" className="profile-pic" />
        </div>
        <div className="about-text">
          <h2>Shaik Mohammed Ayaz</h2>
          <p className="intro">
            An Enthusiastic Learner, Explorer, and Front End Developer.
          </p>
          <p className="details">
            I am driven by a passion for building full-fledged, impactful projects from the ground up.
            My primary focus is on developing Minimum Viable Products (MVPs) with the sole purpose of 
            delivering tangible benefits and solving real-world problems. This Doctor Appointment system 
            is a demonstration of that philosophy—a clean, user-friendly interface built with modern 
            frontend technologies to simplify a common, everyday challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;