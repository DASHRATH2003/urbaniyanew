import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Urbania.css';

const Urbania = () => {
  return (
    <div className="urbania-container">
      <h1>Our Vehicle Fleet</h1>
      <div className="vehicle-categories">
        <div className="category">
          <h2>Premium Vehicles</h2>
          <div className="vehicle-grid">
            <Link to="/urbania/12-1-seater" className="vehicle-card">
              <div className="vehicle-image">
                <img src="/src/assets/new1.webp" alt="12+1 Seater Urbania" />
              </div>
              <div className="vehicle-info">
                <h3>12+1 Seater</h3>
                <p>Premium Force Urbania</p>
                <span className="price">Starting from ₹7,000</span>
              </div>
            </Link>
            <Link to="/urbania/16-1-seater" className="vehicle-card">
              <div className="vehicle-image">
                <img src="/src/assets/new2.webp" alt="16+1 Seater Urbania" />
              </div>
              <div className="vehicle-info">
                <h3>16+1 Seater</h3>
                <p>Premium Force Urbania</p>
                <span className="price">Starting from ₹8,000</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="category">
          <h2>Luxury Vehicles</h2>
          <div className="vehicle-grid">
            <Link to="/urbania/10-1-luxury" className="vehicle-card">
              <div className="vehicle-image">
                <img src="/src/assets/new3.webp" alt="10+1 Luxury Urbania" />
              </div>
              <div className="vehicle-info">
                <h3>10+1 Luxury</h3>
                <p>Luxury Force Urbania</p>
                <span className="price">Starting from ₹9,000</span>
              </div>
            </Link>
            <Link to="/urbania/12-1-luxury" className="vehicle-card">
              <div className="vehicle-image">
                <img src="/src/assets/new4.webp" alt="12+1 Luxury Urbania" />
              </div>
              <div className="vehicle-info">
                <h3>12+1 Luxury</h3>
                <p>Luxury Force Urbania</p>
                <span className="price">Starting from ₹10,000</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urbania;
