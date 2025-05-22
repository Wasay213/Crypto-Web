import React from 'react';
import './Home.css'; // Add a CSS file for styling

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Future of Cryptocurrency</h1>
          <p>
            Explore the endless possibilities of trading, investing, and growing your digital assets with ease.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Cryptocurrency"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Real-Time Analytics</h3>
            <p>
              Stay ahead of the market with our cutting-edge tools and real-time analytics.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Secure Transactions</h3>
            <p>
              Experience the highest level of security for your investments and trades.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-users"></i>
            <h3>Community Support</h3>
            <p>
              Join a thriving community of traders and investors who share your vision.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Join Our Platform Today</h2>
        <p>
          Whether you're a beginner or an expert, we have the tools you need to succeed.
        </p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
};

export default Home;
