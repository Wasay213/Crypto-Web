import React from 'react';
import './Contacts.css'; // Ensure you create a CSS file for styling

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 className="contacts-header">Get in Touch</h1>
      <p className="contacts-subheader">We'd love to hear from you! Fill out the form below or connect with us on social media.</p>
      
      <div className="contacts-form-container">
        <form className="contacts-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contacts-socials">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

