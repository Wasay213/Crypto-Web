import React, { useState } from 'react';
import crypto from '../assets/crypto.jpg';
import { useNavigate } from 'react-router-dom';
import './Hero.css'; 
const Hero = () => {
    const joinUsButtons = ['Sign Up', 'Sign In', 'Start Investing'];
    const [selectedLabel, setSelectedLabel] = useState();
    const navigate = useNavigate();
  
    const handleClick = (label) => {
      setSelectedLabel(label);
      if (label == 'Sign Up'){
        navigate('/signup');
      }else if (label == 'Sign In'){
      navigate('/signin');
      }
    };
  
    const EXAMPLES = {
      'Sign Up': { title: 'Sign Up To get started' },
      'Sign In': { title: 'Sign In' },
      'Start Investing': {title: 'Start your investment journey'}
    };
    return(
        <>
          <section className="hero">
        <div className="hero-overlay">
          <h1>Rent, Invest & Trade</h1>
          <p>Join us today in the world of cryptocurrency investment.</p>

          {/* Button Container */}
          <div className="button-container">
            {joinUsButtons.map((label, index) => (
              <button
                key={index}
                className="cta-button"
                onClick={() => handleClick(label)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Display Selected Button Content */}
          {selectedLabel && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedLabel]?.title}</h3>
            </div>
          )}

          {/* Default Message */}
          {!selectedLabel && <p>Please click a button</p>}
        </div>

        <div className="hero-image">
          <img src={crypto} alt="Crypto" />
        </div>
      </section>

        
        </>
    )
}
export default Hero
