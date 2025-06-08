// src/pages/Appointments.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Appointments.css';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Security check: Redirect if not logged in
        if (!localStorage.getItem('isLoggedIn')) {
            alert('You must be logged in to view your appointments.');
            navigate('/login');
            return; // Stop further execution
        }

        // Fetch stored appointments from localStorage
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        setAppointments(storedAppointments);
    }, [navigate]); // Dependency array includes navigate to follow best practices

    return (
        <div className="appointments-page container">
            <h1>My Appointments</h1>
            {appointments.length > 0 ? (
                <div className="appointments-list">
                    {appointments.map(app => (
                        <div key={app.id} className="appointment-card">
                            <h3>Appointment with Dr. {app.doctorName}</h3>
                            <p><strong>Specialty:</strong> {app.doctorSpecialty}</p>
                            <p><strong>Patient Name:</strong> {app.patientName}</p>
                            <p><strong>Date:</strong> {app.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-appointments">
                    <p>You have no upcoming appointments.</p>
                    <button className="btn" onClick={() => navigate('/')}>Book a New Appointment</button>
                </div>
            )}
        </div>
    );
};

export default Appointments;