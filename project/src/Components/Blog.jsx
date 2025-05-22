import React from 'react';
import './Blog.css'; 
import crt from '../assets/crt.jpg'
import eth from '../assets/eth.jpg'
import ltc from '../assets/ltc.jpg'
const Blog = () => {
  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Our Latest Blog Posts</h1>
        <p>Stay updated with the latest news and trends in the industry.</p>
      </section>

      {/* Blog List Section */}
      <section className="blog-list">
        <h2>Recent Posts</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={crt} alt="Blog Post 1" />
            <div className="blog-card-content">
              <h3>Why Cryptocurrency is the Future</h3>
              <p>
                Learn why cryptocurrency is a game-changer in the financial
                industry. Find out how it’s shaping the future of investments...
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="blog-card">
            <img src={eth} alt="Blog Post 2" />
            <div className="blog-card-content">
              <h3>Top 5 Tips for Cryptocurrency Investment</h3>
              <p>
                Discover the best strategies for investing in cryptocurrencies.
                Learn the dos and don’ts from experienced traders...
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="blog-card">
            <img src={ltc} alt="Blog Post 3" />
            <div className="blog-card-content">
              <h3>The Rise of Decentralized Finance</h3>
              <p>
                Decentralized Finance (DeFi) is revolutionizing the way we view
                finance. This post dives into the impact and potential of DeFi...
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="blog-cta">
        <h2>Want to learn more?</h2>
        <p>Subscribe to our newsletter for more updates and articles.</p>
        <button className="cta-button">Subscribe Now</button>
      </section>
    </div>
  );
};

export default Blog;
