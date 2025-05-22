import React from 'react';
import './Pages.css'; // Link to the CSS file for styling
import btc from '../assets/btc.jpg'
import bitcoin from '../assets/bitcoin.jpg'
import blockchain from '../assets/blockchain.jpg'
const Pages = () => {
  return (
    <div className="pages">
      {/* Hero Section */}
      <section className="pages-hero">
        <h1>Explore Our Pages</h1>
        <p>Discover a wide variety of content tailored just for you.</p>
      </section>

      {/* Highlights Section */}
      <section className="pages-highlights">
        <h2>What You’ll Find</h2>
        <div className="highlights">
          <div className="highlight-card">
            <i className="fas fa-info-circle"></i>
            <h3>About Us</h3>
            <p>Learn more about our mission, vision, and values.</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="highlight-card">
            <i className="fas fa-newspaper"></i>
            <h3>Latest News</h3>
            <p>Stay updated with the latest news and trends.</p>
            <button className="cta-button">Read News</button>
          </div>
          <div className="highlight-card">
            <i className="fas fa-headset"></i>
            <h3>Support</h3>
            <p>Need help? Our support team is here to assist you.</p>
            <button className="cta-button">Get Support</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pages-features">
        <h2>Featured Pages</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src={btc} alt="Feature 1" />
            <h3>Page 1</h3>
            <p>Explore the details and benefits of this section.</p>
          </div>
          <div className="feature-card">
            <img src={bitcoin} alt="Feature 2" />
            <h3>Page 2</h3>
            <p>Find out how this page can help you achieve your goals.</p>
          </div>
          <div className="feature-card">
            <img src={blockchain} alt="Feature 3" />
            <h3>Page 3</h3>
            <p>Discover tips, insights, and best practices here.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pages-cta">
        <h2>Start Exploring</h2>
        <p>Browse our pages and uncover all that we have to offer.</p>
        <button className="cta-button">Explore Now</button>
      </section>
    </div>
  );
};

export default Pages;
