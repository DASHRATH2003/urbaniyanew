import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/animations.css';
import logo from '../assets/newimg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo hover-scale">
            <img src={logo} alt="Dastoor Rentals Logo" />
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times rotate' : 'fas fa-bars'} />
          </div>

          <ul className={isMenuOpen ? 'nav-menu active slide-in' : 'nav-menu'}>
            <li className="nav-item fade-in">
              <Link to="/" className="nav-link hover-scale">Home</Link>
            </li>
            <li className="nav-item dropdown fade-in" ref={dropdownRef}>
              <a href="#" className="nav-link hover-scale" onClick={toggleDropdown}>
                Urbania
              </a>
              <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <div className="dropdown-section">
                  <h4>PREMIUM</h4>
                  <Link to="/urbania/12-1-seater" className="dropdown-item" onClick={closeDropdown}>12+1 Seater</Link>
                  <Link to="/urbania/16-1-seater" className="dropdown-item" onClick={closeDropdown}>16+1 Seater</Link>
                </div>
                <div className="dropdown-section">
                  <h4>LUXURY</h4>
                  <Link to="/urbania/10-1-luxury" className="dropdown-item" onClick={closeDropdown}>10+1 Luxury</Link>
                  <Link to="/urbania/12-1-luxury" className="dropdown-item" onClick={closeDropdown}>12+1 Luxury</Link>
                </div>
              </div>
            </li>
            <li className="nav-item fade-in">
              <Link to="/blog" className="nav-link hover-scale">Blogs</Link>
            </li>
            <li className="nav-item fade-in">
              <Link to="/contact" className="nav-link hover-scale">Contact Us</Link>
            </li>
          </ul>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </nav>

      <div className="floating-contact-buttons">
        <a href="tel:+918951666166" className="floating-button phone-button">
          <i className="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/918951666166" target="_blank" rel="noopener noreferrer" className="floating-button whatsapp-button">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default Navbar;
