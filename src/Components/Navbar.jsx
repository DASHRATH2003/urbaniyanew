import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/animations.css';
import logo from '../assets/newimg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPremiumDropdownOpen, setIsPremiumDropdownOpen] = useState(false);
  const [isLuxuryDropdownOpen, setIsLuxuryDropdownOpen] = useState(false);
  const [isBusDropdownOpen, setIsBusDropdownOpen] = useState(false);
  const premiumDropdownRef = useRef(null);
  const luxuryDropdownRef = useRef(null);
  const busDropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsPremiumDropdownOpen(false);
    setIsLuxuryDropdownOpen(false);
    setIsBusDropdownOpen(false);
  };

  const togglePremiumDropdown = (e) => {
    e.preventDefault();
    setIsPremiumDropdownOpen(!isPremiumDropdownOpen);
    setIsLuxuryDropdownOpen(false);
    setIsBusDropdownOpen(false);
  };

  const toggleLuxuryDropdown = (e) => {
    e.preventDefault();
    setIsLuxuryDropdownOpen(!isLuxuryDropdownOpen);
    setIsPremiumDropdownOpen(false);
    setIsBusDropdownOpen(false);
  };

  const toggleBusDropdown = (e) => {
    e.preventDefault();
    setIsBusDropdownOpen(!isBusDropdownOpen);
    setIsPremiumDropdownOpen(false);
    setIsLuxuryDropdownOpen(false);
  };

  const handleBookNowClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (premiumDropdownRef.current && !premiumDropdownRef.current.contains(event.target)) {
        setIsPremiumDropdownOpen(false);
      }
      if (luxuryDropdownRef.current && !luxuryDropdownRef.current.contains(event.target)) {
        setIsLuxuryDropdownOpen(false);
      }
      if (busDropdownRef.current && !busDropdownRef.current.contains(event.target)) {
        setIsBusDropdownOpen(false);
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
          <Link to="/" className="navbar-logo hover-scale" onClick={handleLinkClick}>
            <img src={logo} alt="Dastoor Rentals Logo" />
            <div className="company-name">A Unit of Blue Bird Travels</div>
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isMenuOpen ? 'fas fa-times rotate' : 'fas fa-bars'} />
          </div>

          <ul className={isMenuOpen ? 'nav-menu active slide-in' : 'nav-menu'}>
            <li className="nav-item fade-in">
              <Link to="/" className="nav-link hover-scale" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown fade-in" ref={premiumDropdownRef}>
              <a href="#" className="nav-link hover-scale" onClick={togglePremiumDropdown}>
                Premium Urbania
              </a>
              <div className={`dropdown-content ${isPremiumDropdownOpen ? 'show' : ''}`}>
                <Link to="/urbania/12-1-seater" className="dropdown-item" onClick={handleLinkClick}>
                  12+1 Seater
                </Link>
                <Link to="/urbania/16-1-seater" className="dropdown-item" onClick={handleLinkClick}>
                  16+1 Seater
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown fade-in" ref={luxuryDropdownRef}>
              <a href="#" className="nav-link hover-scale" onClick={toggleLuxuryDropdown}>
                Luxury Urbania
              </a>
              <div className={`dropdown-content ${isLuxuryDropdownOpen ? 'show' : ''}`}>
                <Link to="/urbania/10-1-luxury" className="dropdown-item" onClick={handleLinkClick}>
                  10+1 Luxury
                </Link>
                <Link to="/urbania/12-1-luxury" className="dropdown-item" onClick={handleLinkClick}>
                  12+1 Luxury
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown fade-in" ref={busDropdownRef}>
              <a href="#" className="nav-link hover-scale" onClick={toggleBusDropdown}>
                Bus
              </a>
              <div className={`dropdown-content ${isBusDropdownOpen ? 'show' : ''}`}>
                <Link to="/bus/21-1-seater" className="dropdown-item" onClick={handleLinkClick}>
                  21+1 Seater AC Mini Coach
                </Link>
                <Link to="/bus/25-1-seater" className="dropdown-item" onClick={handleLinkClick}>
                  25+1 Seater AC Mini Coach
                </Link>
              </div>
            </li>
            <li className="nav-item fade-in">
              <Link to="/blog" className="nav-link hover-scale" onClick={handleLinkClick}>
                Blogs
              </Link>
            </li>
            <li className="nav-item fade-in">
              <Link to="/contact" className="nav-link hover-scale" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item fade-in">
              <button 
                className='book-now-btn'
                onClick={handleBookNowClick}
              >
                Book Now
              </button>
            </li>
          </ul>
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
