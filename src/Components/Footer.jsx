import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logo from '../assets/newimg.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Urbania Rentals Logo" />
            <div className="company-namebird">A Unit of Blue Bird Travels</div>
          </Link>
          <p className="company-description">
            Premium van and bus rental services in Bangalore for corporate events, weddings, and group travel with luxury experience.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>
              <Link to="/urbania/10-1-luxury">Force Urbania 10+1</Link>
            </li>
            <li>
              <Link to="/urbania/12-1-seater">Force Urbania 12+1</Link>
            </li>
            <li>
              <Link to="/urbania/16-1-seater">Force Urbania 16+1</Link>
            </li>
            <li>
              <Link to="/bus/21-1-seater">21+1 Seater AC Mini Coach</Link>
            </li>
            <li>
              <Link to="/bus/25-1-seater">25+1 Seater AC Mini Coach</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="address">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                55th Cross Road , Ramamandira , 3rd Block , Rajainagar , Bangalore, Bangalore, 560010
              </p>
            </div>
            
            <div className="phone-numbers">
              <p>
                <i className="fas fa-phone"></i>
                +91 8951666166
              </p>
            </div>
            <div className="phone-numbers">
              <p>
                <i className="fas fa-phone"></i>
                +91 6366445566
              </p>
            </div>
            
            <div className="email-addresses">
              <p>
                <i className="fas fa-envelope"></i>
                enquiry@urbaniarentalsbangalore.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Urbania Rentals. All rights reserved.</p>
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
