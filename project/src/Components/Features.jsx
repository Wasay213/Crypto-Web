import React from 'react';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: '💳',
      title: 'Secure Transactions',
      description: 'End-to-end encryption for all your financial transactions'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Track your investments with advanced analytics tools'
    },
    {
      icon: '🔄',
      title: 'Instant Exchange',
      description: 'Swap cryptocurrencies instantly with best market rates'
    },
    {
      icon: '📱',
      title: 'Mobile Trading',
      description: 'Trade on the go with our powerful mobile platform'
    },
    {
      icon: '🔒',
      title: 'Multi-layer Security',
      description: 'Advanced security features to protect your assets'
    },
    {
      icon: '24/7',
      title: 'Round-the-clock Support',
      description: 'Expert support available whenever you need assistance'
    }
  ];

  return (
    <div className="features-container">
      <div className="features-header">
        <h1>Our Features</h1>
        <p>Discover the tools that make us the leading crypto platform</p>
      </div>

      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
