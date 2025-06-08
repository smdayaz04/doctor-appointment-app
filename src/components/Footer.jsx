import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Kadapa,Andhra pradeh</p>
          <p>Email: <a href="mailto:smdayaz04@gmail.com">smdayaz04@gmail.com</a></p>
          <p>Phone: +91 9491937949</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-buttons">
            <Link to="/" className="footer-btn">Home</Link>
            <Link to="/about" className="footer-btn">About</Link>
            <Link to="/appointments" className="footer-btn">Appointments</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-buttons">
            <a href="https://www.facebook.com/share/1ApthnRZkf/?mibextid=qi2Omg" target="_blank" rel="noreferrer" className="footer-btn"><img src="src\assets\icon-logo-facebook.png" alt="Facebook" width="20" style={{ marginRight: '8px' }} /></a>
            <a href="https://www.instagram.com/ayaaaz.04?igsh=MTdjN3Z3MmZzcDF4Ng==" target="_blank" rel="noreferrer" className="footer-btn"><img src="src\assets\icon-logo-instagram.png" alt="Instagram" width="20" style={{ marginRight: '8px' }} /></a>
            <a href="https://www.linkedin.com/in/s-md-ayaz-3888b3325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="footer-btn"><img src="src\assets\icon-logo-twitter.png" alt="Twitter" width="20" style={{ marginRight: '8px' }} /></a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        Doctor Appointment © 2025 by <strong>S MD AYAZ</strong>.
      </div>
    </footer>
  );
};

export default Footer;
