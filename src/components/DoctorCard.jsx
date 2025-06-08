// src/components/DoctorCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './DoctorCard.css';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    // Check if user is logged in before navigating
    if (localStorage.getItem('isLoggedIn')) {
      // If logged in, go to the booking page for this specific doctor
      navigate(`/booking/${doctor.id}`);
    } else {
      // If not logged in, redirect to the login page
      alert('Please log in to book an appointment.');
      navigate('/login');
    }
  };

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={`Dr. ${doctor.name}`} className="doctor-image" />
      <h3>Dr. {doctor.name}</h3>
      <p className="doctor-specialty">{doctor.specialty}</p>
      {/* The button now calls our smart handleBooking function */}
      <button onClick={handleBooking} className="btn">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;