import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/UrbaniaTwelvePlusOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import new1 from "../assets/new1.webp";
import new2 from "../assets/new2.webp";
import new3 from "../assets/new3.webp";
import new4 from "../assets/new4.webp";

const UrbaniaSixteenPlusOne = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [new2, new3, new1, new4];

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
          <h1>Force Urbania 16+1 Seater Premium Van Rental</h1>
          <p>
            Experience ultimate group travel comfort with our brand new 2025
            model Force Urbania 16+1 seater premium van. Perfect for large
            groups, corporate events, and extended outstation travel.
          </p>
        </header>

        <div className="detail-content">
          <div className="rental-info">
            <div className="rental-packages">
              <h2>Rental Packages:</h2>
              <table className="packages-table">
                <tbody>
                  <tr>
                    <td>8hrs 80Kms</td>
                    <td>₹8,000</td>
                  </tr>
                  <tr>
                    <td>12hrs 100Kms</td>
                    <td>₹11,000</td>
                  </tr>
                  <tr>
                    <td>Out Station / Kms</td>
                    <td>₹45</td>
                  </tr>
                  <tr>
                    <td>Driver Bata</td>
                    <td>₹800</td>
                  </tr>
                  <tr>
                    <td>After Hrs Driver Bata</td>
                    <td>₹800</td>
                  </tr>
                  <tr>
                    <td>Extra Per Kms</td>
                    <td>₹45</td>
                  </tr>
                  <tr>
                    <td>Extra Per Hours</td>
                    <td>₹450</td>
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
                <a href="tel:+918951666166" className="call-btn">
                  Call: 8951666166
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
                  alt={`Force Urbania 16+1 Seater View ${currentImage + 1}`} 
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
            <h2>Features & Amenities</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-couch"></i>
                <h3>Extended Seating</h3>
                <p>
                  Spacious seating arrangement with maximum comfort for 16
                  passengers plus driver.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-snowflake"></i>
                <h3>Enhanced Climate Control</h3>
                <p>
                  Dual-zone AC system with individual vents for consistent
                  temperature throughout.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-plug"></i>
                <h3>Multiple Charging Points</h3>
                <p>
                  Strategically placed USB ports throughout the cabin for all
                  passengers.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Advanced Safety</h3>
                <p>
                  Comprehensive safety features including ABS, EBD, and multiple
                  airbags.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-suitcase"></i>
                <h3>Extra Storage</h3>
                <p>
                  Expanded luggage space perfect for long trips and large
                  groups.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-music"></i>
                <h3>Premium Entertainment</h3>
                <p>
                  Advanced audio system with Bluetooth connectivity and multiple
                  speakers.
                </p>
              </div>
            </div>
          </section>

          <section className="destinations-section">
            <h2>Popular Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Large Group Travel</h3>
                <p>
                  Perfect for extended families, large corporate groups, and
                  team outings with ample space for everyone.
                </p>
              </div>
              <div className="service-item">
                <h3>Extended Outstation Travel</h3>
                <p>
                  Ideal for long-distance trips with large groups, offering
                  maximum comfort and storage space.
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

export default UrbaniaSixteenPlusOne;
