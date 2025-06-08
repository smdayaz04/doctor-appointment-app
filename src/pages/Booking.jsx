// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Booking.css';
import docImg1 from '../assets/1.jpg';
import docImg2 from '../assets/2.jpg';
import docImg3 from '../assets/3.jpg';
import docImg4 from '../assets/4.avif';

// Re-using the same doctor data. In a real app, you might fetch this again.
const doctors = [
  { id: 1, name: 'Johnathan Doe', specialty: 'Cardiologist', image: docImg1 },
  { id: 2, name: 'Jane Smith', specialty: 'Dermatologist', image: docImg2 },
  { id: 3, name: 'Sam Wilson', specialty: 'Pediatrician', image: docImg3 },
  { id: 4, name: 'Emily Brown', specialty: 'Neurologist', image: docImg4 },
];

const Booking = () => {
  const { doctorId } = useParams(); // Gets the ':doctorId' from the URL
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    // Find the doctor by ID from the params
    const selectedDoctor = doctors.find(d => d.id === parseInt(doctorId));
    setDoctor(selectedDoctor);
    
    // Security check: Redirect if not logged in
    if (!localStorage.getItem('isLoggedIn')) {
        alert('You must be logged in to book an appointment.');
        navigate('/login');
    }
  }, [doctorId, navigate]);

  const handleBookingConfirm = (e) => {
    e.preventDefault();
    if (patientName && appointmentDate) {
      const appointmentDetails = {
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialty,
        patientName,
        date: appointmentDate,
        id: Date.now() // A simple unique ID for the appointment
      };

      // Get existing appointments or initialize an empty array
      const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      // Add the new appointment
      const updatedAppointments = [...existingAppointments, appointmentDetails];
      // Save back to localStorage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      setIsBooked(true); // Set state to show confirmation message
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Show a loading or not found message while fetching doctor info
  if (!doctor) {
    return <div className="container"><h2>Doctor not found or loading...</h2></div>;
  }
  
  // Show a confirmation message after successful booking
  if (isBooked) {
      return (
          <div className="booking-confirmation container">
              <h2>Appointment Confirmed!</h2>
              <p>Your appointment with Dr. {doctor.name} on {appointmentDate} has been successfully booked.</p>
              {/* We will build the /appointments page next! */}
              <button className="btn" onClick={() => navigate('/')}>Back to Home</button>
          </div>
      )
  }

  return (
    <div className="booking-page container">
      <h2>Book an Appointment with Dr. {doctor.name}</h2>
      <p className="doctor-specialty-booking">Specialty: {doctor.specialty}</p>
      <form className="booking-form" onSubmit={handleBookingConfirm}>
        <div className="form-group">
          <label htmlFor="patientName">Your Full Name</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Preferred Date</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;