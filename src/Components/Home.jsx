import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../styles/animations.css";

import { initScrollReveal } from "../utils/scrollReveal";

// Interior seat images for rental cards
import seatImage1 from "../assets/12seater2.jpeg";
import seatImage2 from "../assets/12seater8.jpeg";
import seatImage3 from "../assets/12seater9.jpg";
import seatImage4 from "../assets/seet44.webp";

// Leading/Hero images
import heroImage1 from "../assets/leading1.webp";
import heroImage2 from "../assets/leading2.avif";
import heroImage3 from "../assets/leading3.jpeg";
import heroImage4 from "../assets/force.avif";

// Landing images for additional views
import landingImage1 from "../assets/landing-1.webp";
import landingImage2 from "../assets/landing-2.webp";
import landingImage3 from "../assets/landing-3.webp";

// 12 seater specific images
import seater1 from "../assets/12seater.jpeg";
import seater2 from "../assets/12seater1.jpeg";
import seater3 from "../assets/12seater2.jpeg";

// Define image sets for different vehicle types
const urbania10Images = [seatImage1, landingImage1, heroImage1, seatImage4];
const urbania12Images = [
  seater1,
  seater2,
  seater3,
  landingImage2,
  heroImage2,
  seatImage3,
];
const urbania16Images = [seatImage3, landingImage3, heroImage3, seatImage2];

const rentalServices = [
  {
    id: 1,
    title: "Force Urbania 10+1",
    description:
      "Perfect for small groups and corporate travels with comfortable seating and modern amenities.",
    features: [
      "Entertainment System",
      "Individual AC Vents",
      "USB Charging",
      "Comfortable Seating",
    ],
    images: urbania10Images,
  },
  {
    id: 2,
    title: "Force Urbania 12+1",
    description:
      "Ideal for medium-sized groups with extra luggage space and all premium features.",
    features: [
      "Premium Seating",
      "Extra Luggage Space",
      "Multi-zone Climate Control",
      "Advanced Entertainment",
    ],
    images: urbania12Images,
  },
  {
    id: 3,
    title: "Force Urbania 16+1",
    description:
      "Our largest van, perfect for large groups, weddings, and extended trips with maximum comfort.",
    features: [
      "Maximum Space",
      "Premium Comfort",
      "Extended Storage",
      "Luxury Interior",
    ],
    images: urbania16Images,
  },
];

const reviews = [
  {
    id: 1,
    name: "kishor raj",
    avatar: "I",
    rating: 5,
    date: "4 days ago",
    isNew: true,
    text: "Hired a Luxury 9-Seater Traveller for our Dandeli trip—very smooth and comfortable experience!",
    bgColor: "#c0392b",
  },
  {
    id: 2,
    name: "ROHAN",
    avatar: "R",
    rating: 5,
    date: "4 days ago",
    isNew: true,
    text: "We hired a 10-seater for our Mysore trip and had a great experience. The vehicle was comfortable and the driver was punctual, polite, and very skilled.",
    bgColor: "#e74c3c",
  },
  {
    id: 3,
    name: "milana raj",
    avatar: "m",
    rating: 5,
    date: "2 weeks ago",
    isNew: true,
    text: "We had a wonderful trip with Urbania Rentals our trip to ooty was very good driver was also nice",
    bgColor: "#e84393",
  },
  {
    id: 4,
    name: "Pradeep Kumar",
    avatar: "P",
    rating: 5,
    date: "1 week ago",
    isNew: true,
    text: "Outstanding service! The Force Urbania was perfect for our family trip. Very clean and well-maintained vehicle.",
    bgColor: "#3498db",
  },
  {
    id: 5,
    name: "Sneha Reddy",
    avatar: "S",
    rating: 5,
    date: "3 days ago",
    isNew: true,
    text: "Excellent experience with the 12+1 seater. Driver was very professional and friendly. Will definitely book again!",
    bgColor: "#9b59b6",
  },
  {
    id: 6,
    name: "Arun Mehta",
    avatar: "A",
    rating: 5,
    date: "1 week ago",
    isNew: true,
    text: "Best rental service in Bangalore! Used their services for a corporate event. Very professional and punctual.",
    bgColor: "#2ecc71",
  },
  {
    id: 7,
    name: "Kavya S",
    avatar: "K",
    rating: 5,
    date: "5 days ago",
    isNew: true,
    text: "Great experience with the Force Urbania. Perfect for our weekend getaway. Driver was very helpful.",
    bgColor: "#f1c40f",
  },
  {
    id: 8,
    name: "Mohammed Ali",
    avatar: "M",
    rating: 5,
    date: "2 days ago",
    isNew: true,
    text: "Booked for a wedding. Vehicle was spacious and comfortable. Service was excellent!",
    bgColor: "#e67e22",
  },
  {
    id: 9,
    name: "Mukesh jain",
    avatar: "L",
    rating: 5,
    date: "6 days ago",
    isNew: true,
    text: "Very satisfied with the service. Clean vehicle, professional driver, and smooth booking process.",
    bgColor: "#16a085",
  },
  {
    id: 10,
    name: "Rajesh Kumar",
    avatar: "R",
    rating: 5,
    date: "1 week ago",
    isNew: true,
    text: "Fantastic experience! Used their service for an office trip. Everything was perfect from start to finish.",
    bgColor: "#8e44ad",
  },
];

const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

// About section images array
const aboutImages = [
  seatImage1,
  seatImage2, 
  seatImage3,
  seatImage4,
  heroImage3
];

const Home = () => {
  // Rental card images index state - one per rental card
  const [rentalIndices, setRentalIndices] = useState(
    rentalServices.map(() => 0)
  );

  const [scrollPosition, setScrollPosition] = useState(0);
  const reviewsContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    journeyType: "local",
    duration: "",
    service: "",
    message: "",
    verification: "",
  });

  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentAboutImage, setCurrentAboutImage] = useState(0);

  useEffect(() => {
    const cleanup = initScrollReveal();

    // Hero image slideshow every 2 seconds
    const heroInterval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    // About section slideshow every 2 seconds
    const aboutInterval = setInterval(() => {
      setCurrentAboutImage((prev) => (prev + 1) % aboutImages.length);
    }, 2000);

    // Rental cards slideshow every 0.8 seconds
    const rentalInterval = setInterval(() => {
      setRentalIndices((prev) =>
        prev.map(
          (idx, serviceIndex) =>
            (idx + 1) % rentalServices[serviceIndex].images.length
        )
      );
    }, 800);

    // Auto-scroll reviews
    const scrollInterval = setInterval(() => {
      if (reviewsContainerRef.current) {
        const container = reviewsContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (scrollPosition >= maxScroll) {
          setScrollPosition(0);
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          const newPosition = scrollPosition + 300;
          setScrollPosition(newPosition);
          container.scrollTo({
            left: newPosition,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(aboutInterval);
      clearInterval(rentalInterval);
      clearInterval(scrollInterval);
      cleanup();
    };
  }, [scrollPosition]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      journeyType: "local",
      duration: "",
      service: "",
      message: "",
      verification: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="slide-in">TRAVEL IN COMFORT & STYLE</h1>
            <h2 className="slide-in">
              Premium Force Urbania Van Rental in Bangalore
            </h2>
            <p className="slide-in">
              Experience luxury travel with our Force Urbania vans. Perfect for
              corporate events, weddings, group travel, and outstation trips.
              Book now for a comfortable journey!
            </p>
          </div>
          <div className="hero-image reveal">
            <img
              src={heroImages[currentHeroImage]}
              alt="Force Urbania Van"
              className="fade-in"
            />
            <div className="image-indicators">
              {heroImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${
                    index === currentHeroImage ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h1 className="about-heading">About Us</h1>

        <div className="about-container">
          <div className="about-image">
            <img 
              src={aboutImages[currentAboutImage]} 
              alt="About Us" 
              className="fade-in"
            />
            <div className="image-indicators">
              {aboutImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentAboutImage ? "active" : ""}`}
                  onClick={() => setCurrentAboutImage(index)}
                />
              ))}
            </div>
          </div>

          <div className="about-content">
            <p>
              At <strong>Urbania Rentals</strong>, we specialize in providing
              reliable, comfortable, and premium travel solutions across
              Bangalore and beyond. Whether you're planning a weekend getaway to
              Ooty or Coorg or need daily transportation, our fleet is tailored
              to meet your every need.
            </p>
            <p>
              With a commitment to safety, cleanliness, and punctuality, our
              professional drivers ensure every ride is a smooth experience. We
              pride ourselves on building long-term relationships with our
              clients based on trust and satisfaction.
            </p>
            <p>
              Join hundreds of happy customers who have made us their preferred
              choice for rentals — experience travel the Urbania way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h1 className="reveal">Our Rental Services</h1>
        <p className="reveal">
          Choose from our range of vehicles to suit your needs
        </p>

        <div className="rental-services">
          {rentalServices.map((service, idx) => (
            <div key={service.id} className="rental-card">
              <div className="rental-image">
                <img
                  src={service.images[rentalIndices[idx]]}
                  alt={`${service.title} slide`}
                  className="hover-scale"
                />
                <div className="image-dots">
                  {service.images.map((_, dotIdx) => (
                    <span
                      key={dotIdx}
                      className={`dot ${
                        dotIdx === rentalIndices[idx] ? "active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="rental-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/urbania/${
                    service.id === 1
                      ? "10-1-luxury"
                      : service.id === 2
                      ? "12-1-seater"
                      : "16-1-seater"
                  }`}
                  className="view-details-btn hover-scale"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="features">
        <h1 className="reveal">Premium Features</h1>
        <p className="reveal">
          Experience next-level quality with our premium offerings
        </p>

        <div className="features-grid">
          {[
            {
              icon: "⭐",
              title: "Priority Access",
              description:
                "Skip queues with exclusive priority service channels.",
            },
            {
              icon: "🎁",
              title: "Exclusive Benefits",
              description:
                "Special perks and gifts available only to premium members.",
            },
            {
              icon: "📱",
              title: "Dedicated Support",
              description:
                "24/7 personal concierge service via dedicated hotline.",
            },
            {
              icon: "💎",
              title: "Premium Materials",
              description:
                "Only the highest quality materials used in all products.",
            },
            {
              icon: "🔐",
              title: "Enhanced Security",
              description:
                "Advanced protection features for your peace of mind.",
            },
            {
              icon: "🔄",
              title: "Flexible Options",
              description:
                "Customizable features tailored to your preferences.",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card reveal hover-scale">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rental Packages Section */}
      <section className="rental-packages">
        <h1 className="reveal">Force Urbania Rental Packages</h1>
        <p className="reveal">Transparent pricing with no hidden charges</p>

        <div className="packages-container">
          {/* 8 Hours Package */}
          <div className="package-card reveal hover-scale">
            <div className="package-header">
              <h3>8 Hours Package</h3>
              <div className="package-price">₹7,000</div>
              <div className="package-duration">8 hours / 80 km</div>
            </div>
            <ul className="package-features">
              <li> Force Urbania 10+1 Seater</li>
              <li> Professional driver</li>
              <li> Individual AC vents</li>
              <li> USB charging ports</li>
              <li> Local Bangalore travel</li>
            </ul>
            <Link to="/contact" className="package-button">
              Book Now
            </Link>
          </div>

          {/* 12 Hours Package (Most Popular) */}
          <div className="package-card popular reveal hover-scale">
            <div className="popular-badge">Most Popular</div>
            <div className="package-header">
              <h3>12 Hours Package</h3>
              <div className="package-price">₹9,999</div>
              <div className="package-duration">12 hours / 100 km</div>
            </div>
            <ul className="package-features">
              <li> Force Urbania 12+1 Seater</li>
              <li> Professional driver</li>
              <li> Individual AC vents</li>
              <li> USB charging ports</li>
              <li> Local Bangalore travel</li>
            </ul>
            <Link to="/contact" className="package-button">
              Book Now
            </Link>
          </div>

          {/* Outstation Package */}
          <div className="package-card reveal hover-scale">
            <div className="package-header">
              <h3>Outstation Package</h3>
              <div className="package-price">₹45/km</div>
              <div className="package-duration">Minimum 300 km per day</div>
            </div>
            <ul className="package-features">
              <li> Force Urbania 16+1 Seater</li>
              <li> Professional driver</li>
              <li> Driver allowance included</li>
              <li> No hidden charges</li>
              <li> Toll & parking extra</li>
            </ul>
            <Link to="/contact" className="package-button">
              Book Now
            </Link>
          </div>
        </div>

        <div className="package-note reveal">
          <p>
            Note: Additional charges may apply for extra hours or kilometers.
          </p>
          <p>
            For custom packages or outstation trips, please contact us directly.
          </p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <div className="section-header">
          <h1 className="reveal">What Our Customers Say</h1>
          <div className="rating-summary reveal">
            <div className="stars">★★★★★</div>
            <span>5.0 rating based on verified reviews</span>
          </div>
        </div>

        <div className="reviews-container" ref={reviewsContainerRef}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card reveal hover-scale">
              <div className="review-header">
                <div
                  className="reviewer-avatar"
                  style={{ background: review.bgColor }}
                >
                  {review.avatar}
                </div>
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="review-date">
                    {review.date}
                    {review.isNew && <span className="new-badge">NEW</span>}
                  </div>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* After reviews section, add contact and map section */}
      <section className="contact-map-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Book your Force Urbania rental or inquire about our services
        </p>

        <div className="contact-map-container">
          <div className="location-container reveal">
            <div className="contact-box">
              <h3>Our Location</h3>
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006630165329!2d77.63633067507825!3d12.97570301783599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae169b1d8c4c33%3A0x492694f3d9c9839f!2sUrbania%20Rentals!5e0!3m2!1sen!2sin!4v1709884121345!5m2!1sen!2sin"
                  width="100%"
                  height="160"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="address-info">
                    <p className="address-text">
                      55th Cross Road, Ramamandira, 3rd Block,
                      <br />
                      Rajainagar, Bangalore, 560010
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div className="contact-info">
                    <p>+91 8951666166</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone-alt"></i>
                  <div className="contact-info">
                  <p>+91 6366445566 </p>
                  </div>
                </div>
               

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-info">
                    <p>enquiry@urbaniarentalsbangalore.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-box">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>✓ Premium, well-maintained vehicles</li>
                <li>✓ Experienced and professional drivers</li>
                <li>✓ Transparent pricing with no hidden charges</li>
                <li>✓ 24/7 customer support</li>
                <li>✓ Flexible booking options</li>
              </ul>
            </div>
          </div>

          <div className="booking-form-container reveal">
            <h3>Book Your Ride</h3>
            <form className="booking-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder=""
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Journey Type*</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="journeyType"
                        value="local"
                        checked={formData.journeyType === "local"}
                        onChange={handleInputChange}
                      />
                      Local
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="journeyType"
                        value="outstation"
                        checked={formData.journeyType === "outstation"}
                        onChange={handleInputChange}
                      />
                      Outstation
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration*</label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Less than 8 hours</option>
                  <option value="8-12">8-12 hours</option>
                  <option value="12-24">12-24 hours</option>
                  <option value="multiple">Multiple days</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service*</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Force Urbania 12+1</option>
                  <option value="urbania-10">Force Urbania 10+1</option>
                  <option value="urbania-16">Force Urbania 16+1</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter any specific requirements or questions..."
                  rows="4"
                ></textarea>
              </div>

           

              <button type="submit" className="submit-button">
                Book Your Urbania Now →
              </button>

              <p className="terms-text">
                By submitting this form, you agree to our{" "}
                <Link to="/">Terms of Service</Link> and{" "}
                <Link to="/">Privacy Policy</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
