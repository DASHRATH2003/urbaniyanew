import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/UrbaniaTwelvePlusOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import new1 from "../assets/new1.webp";
import new2 from "../assets/new2.webp";
import new3 from "../assets/new3.webp";
import new4 from "../assets/new4.webp";

const UrbaniaLuxuryTenPlusOne = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [new3, new1, new2, new4];

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
          <h1>Force Urbania 10+1 Luxury Van Rental</h1>
          <p>
            Experience unmatched luxury with our brand new 2025 model Force
            Urbania 10+1 luxury van. Perfect for executive travel, VIP
            transport, and premium group outings.
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
                    <td>₹9,000</td>
                  </tr>
                  <tr>
                    <td>12hrs 100Kms</td>
                    <td>₹12,000</td>
                  </tr>
                  <tr>
                    <td>Out Station / Kms</td>
                    <td>₹50</td>
                  </tr>
                  <tr>
                    <td>Driver Bata</td>
                    <td>₹1,000</td>
                  </tr>
                  <tr>
                    <td>After Hrs Driver Bata</td>
                    <td>₹1,000</td>
                  </tr>
                  <tr>
                    <td>Extra Per Kms</td>
                    <td>₹50</td>
                  </tr>
                  <tr>
                    <td>Extra Per Hours</td>
                    <td>₹500</td>
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
                  alt={`Force Urbania 10+1 Luxury View ${currentImage + 1}`} 
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
            <h2>Luxury Features & Amenities</h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-couch"></i>
                <h3>Premium Leather Seating</h3>
                <p>
                  Luxurious leather captain seats with extra cushioning and
                  recline function.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-snowflake"></i>
                <h3>Premium Climate Control</h3>
                <p>
                  Multi-zone climate control with individual temperature
                  settings.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-tv"></i>
                <h3>Entertainment System</h3>
                <p>
                  LED screens with premium audio and wireless headphone
                  connectivity.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Enhanced Safety</h3>
                <p>
                  360-degree cameras, parking sensors, and advanced driver
                  assistance.
                </p>
              </div>
              <div className="feature-card">
                <i className="fas fa-wifi"></i>
                <h3>Onboard Wi-Fi</h3>
                <p>High-speed internet connectivity for all passengers.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-wine-glass-alt"></i>
                <h3>Mini Bar</h3>
                <p>Refreshment center with cooler for beverages and snacks.</p>
              </div>
            </div>
          </section>

          <section className="destinations-section">
            <h2>Premium Services</h2>
            <div className="services-list">
              <div className="service-item">
                <h3>Executive Travel</h3>
                <p>
                  Ideal for business executives, VIP transport, and corporate
                  delegations with premium comfort and amenities.
                </p>
              </div>
              <div className="service-item">
                <h3>Luxury Tourism</h3>
                <p>
                  Perfect for luxury tourism, high-end events, and premium group
                  outings with top-tier comfort.
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

export default UrbaniaLuxuryTenPlusOne;
