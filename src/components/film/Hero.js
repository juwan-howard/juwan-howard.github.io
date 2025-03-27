import React, { useState, useEffect } from 'react';
import './Hero.css';
import INFO from '../../data/user';
import firstImage from '../../assets/first_image.JPG';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Update the isMobile state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const heroStyle = {
    backgroundImage: `url(${firstImage})`,
    backgroundPosition: isMobile ? '16% center' : 'center',
    backgroundSize: 'cover'
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">VISUAL STORYTELLER</h1>
        <p className="hero-subtitle">{INFO.about.tagline}</p>
        <div className="hero-buttons">
          <a href="#work" className="hero-button primary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 