import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/UrbaniaTwelvePlusOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import new1 from "../assets/new1.webp";
import new2 from "../assets/new2.webp";
import new3 from "../assets/new3.webp";
import new4 from "../assets/new4.webp";

const UrbaniaLuxuryTwelvePlusOne = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [new4, new1, new2, new3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="urbania-detail">
      <div className="urbania-detail-container">
        <header className="detail-header">
          <h1>Force Urbania 12+1 Luxury Van Rental</h1>
          <p>
            Experience supreme luxury with our brand new 2025 model Force
            Urbania 12+1 luxury van. Perfect for premium group travel, corporate
            events, and luxury tourism.
          </p>
        </header>

        <div className="detail-content">
          <div className="rental-info">
            <div className="rental-packages">
              <h2>Rental Packages:</h2>
              <table className="packages-table">
                <thead>
                  <tr>
                    <th>HOUR/KMS SLAB</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8hrs 80Kms</td>
                    <td>₹10,000</td>
                  </tr>
                  <tr>
                    <td>12hrs 100Kms</td>
                    <td>₹13,000</td>
                  </tr>
                  <tr className="highlight">
                    <td>Out Station / Kms</td>
                    <td>₹55</td>
                  </tr>
                  <tr className="highlight">
                    <td>Driver Bata</td>
                    <td>₹1,200</td>
                  </tr>
                  <tr className="highlight">
                    <td>After Hrs Driver Bata</td>
                    <td>₹1,200</td>
                  </tr>
                  <tr className="highlight">
                    <td>Extra Per Kms</td>
                    <td>₹55</td>
                  </tr>
                  <tr className="highlight">
                    <td>Extra Per Hours</td>
                    <td>₹550</td>
                  </tr>
                </tbody>
              </table>
              <p className="package-note">
                * Driver bata, toll, and parking charges are extra. GST
                additional as applicable.
              </p>
              <div className="action-buttons">
                <Link to="/contact" className="book-now-btn">
                  Book Now
                </Link>
                <a href="tel:+916361507060" className="call-btn">
                  Call: 6361507060
                </a>
              </div>
            </div>

            <div className="vehicle-image-slider">
              <button className="slider-btn prev" onClick={prevImage}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="vehicle-image">
                <img 
                  src={images[currentImage]} 
                  alt={`Force Urbania 12+1 Luxury View ${currentImage + 1}`} 
                />
                <div className="slider-dots">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentImage ? 'active' : ''}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>
              <button className="slider-btn next" onClick={nextImage}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <section className="features-section">
            <h2>Premium Luxury Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-couch"></i>
                <h3>VIP Leather Seating</h3>
                <p>
                  Premium leather captain seats with massage and full recline
                  functionality.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-snowflake"></i>
                <h3>Luxury Climate System</h3>
                <p>
                  Advanced climate control with air purification and individual
                  controls.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-tv"></i>
                <h3>Premium Entertainment</h3>
                <p>
                  Multiple LED screens, premium sound system, and wireless
                  connectivity.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Advanced Safety Suite</h3>
                <p>
                  Complete safety package with 360° cameras and collision
                  prevention.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-glass-martini"></i>
                <h3>Executive Mini Bar</h3>
                <p>
                  Premium refreshment center with refrigeration and service
                  area.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-wifi"></i>
                <h3>Business Connectivity</h3>
                <p>5G Wi-Fi, wireless charging, and mobile office features.</p>
              </div>
            </div>
          </section>

          <section className="destinations-section">
            <h2>Luxury Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>VIP Corporate Travel</h3>
                <p>
                  Designed for executive teams, board meetings on the go, and
                  premium corporate events with top-tier amenities.
                </p>
              </div>
              <div className="service-item">
                <h3>Luxury Tourism</h3>
                <p>
                  Perfect for high-end tourism, celebrity transport, and luxury
                  group travel with unmatched comfort.
                </p>
              </div>
            </div>
          </section>
          <section className="transparent-pricing-section">
            <h2 className="pricing-title">Transparent Pricing</h2>
            <p className="pricing-subtitle">
              We believe in clear, upfront pricing with no hidden charges
            </p>

            <div className="pricing-box">
              <div className="pricing-column">
                <h3>What's Included:</h3>
                <ul>
                  <li>
                    <span className="check">✔</span> Vehicle charges as per the
                    selected package
                  </li>
                  <li>
                    <span className="check">✔</span> Professional driver with
                    extensive local knowledge
                  </li>
                  <li>
                    <span className="check">✔</span> Fuel costs for the agreed
                    distance
                  </li>
                  <li>
                    <span className="check">✔</span> Driver allowance for
                    outstation trips
                  </li>
                </ul>
              </div>
              <div className="pricing-column">
                <ul>
                  <li>
                    <span className="cross">✘</span> Toll charges (to be paid as
                    per actual)
                  </li>
                  <li>
                    <span className="cross">✘</span> Parking fees (to be paid as
                    per actual)
                  </li>
                  <li>
                    <span className="cross">✘</span> Additional charges for
                    extra hours/kilometers
                  </li>
                  <li>
                    <span className="cross">✘</span> Interstate permits (if
                    applicable)
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default UrbaniaLuxuryTwelvePlusOne;
