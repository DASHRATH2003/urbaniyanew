import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    journeyType: 'Local',
    duration: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        // Clear form
        setFormData({
          name: '',
          phone: '',
          email: '',
          journeyType: 'Local',
          duration: '',
          service: '',
          message: ''
        });
      })
      .catch(() => {
        setSubmitStatus({
          type: 'error',
          message: 'Oops! Something went wrong. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">Have a question about our services or need assistance with booking? Our team is here to help. Reach out to us using any of the specified methods below.</p>

      <div className="contact-container">
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          
          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <h3>Phone</h3>
              <p>+91 8951666166</p>
           
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} className="info-icon" />
              <h3>Phone</h3>
             
              <p>+91 6366445566 </p>
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
              <h3>Email</h3>
              <p>enquiry@urbaniarentalsbangalore.in</p>
        
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
              <h3>Office Address  </h3>
              <p>55th Cross Road ,Ramamandira 3rd Block,Rajainagar , BangaloreB, 560010 ,</p>
             
            </div>

            <div className="info-item">
              <FontAwesomeIcon icon={faClock} className="info-icon" />
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 7:00 AM - 8:00 PM</p>
              <p>Sunday: Available on request</p>
              
            </div>
          </div>

          <div className="connect-with-us">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon youtube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="social-icon google">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </div>
          </div>
        </div>

        <div className="book-ride">
          <h2>Book Your Ride</h2>
          <form ref={form} onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <select
                name="journeyType"
                value={formData.journeyType}
                onChange={handleChange}
                required
              >
                <option value="">Select Journey Type*</option>
                <option value="Local">Local</option>
                <option value="Outstation">Outstation</option>
              </select>

              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              >
                <option value="">Select Duration*</option>
                <option value="8hrs">8 Hours Package</option>
                <option value="12hrs">12 Hours Package</option>
                <option value="custom">Custom Duration</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Vehicle*</option>
                <option value="10+1">Force Urbania 10+1 Seater</option>
                <option value="12+1">Force Urbania 12+1 Seater</option>
                <option value="16+1">Force Urbania 16+1 Seater</option>
                <option value="21+1">21+1 Seater AC Mini Coach</option>
                <option value="25+1">25+1 Seater AC Mini Coach</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>

            <div className="terms-privacy">
              <p>
                By submitting this form, you agree to our{' '}
                <Link to="/terms" className="terms-link">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
              </p>
            </div>

            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="location-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085423427736!3d12.954517008640543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683840247889!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Urbania Rentals Location"
          ></iframe>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our services</p>
        
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I book a vehicle?</h3>
            <p>
              You can book a vehicle by calling us at <a href="tel:+916361507060">+91 8951666166</a>, filling out our
              contact form, or sending an email to <a 
              href="mailto:bookings@urbaniarentalsbangalore.com">enquiry@urbaniarentalsbangalore.in</a> with your requirements.
            </p>
          </div>

          <div className="faq-item">
            <h3>What is your cancellation policy?</h3>
            <p>
              Cancellations made 48 hours before the scheduled trip are eligible for a full refund. 
              Cancellations within 24-48 hours will receive a 50% refund. 
              Cancellations less than 24 hours in advance are non-refundable.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do your vehicles have air conditioning?</h3>
            <p>
              Yes, all our vehicles are equipped with air conditioning and individual AC vents 
              for passenger comfort, regardless of the weather conditions.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are your drivers experienced?</h3>
            <p>
              All our drivers are professionally trained with years of experience and excellent 
              knowledge of routes throughout Karnataka and neighboring states.
            </p>
          </div>

          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>
              We accept cash, credit/debit cards, bank transfers, and popular digital payment 
              methods including UPI, Google Pay, and PayTM.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you offer discounts for long-term rentals?</h3>
            <p>
              Yes, we offer special rates for long-term rentals and corporate contracts. 
              Please contact us for customized quotes based on your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
