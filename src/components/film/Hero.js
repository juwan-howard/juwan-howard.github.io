import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">CINEMATIC STORYTELLING</h1>
        <p className="hero-subtitle">Capturing moments through the lens</p>
        <div className="hero-buttons">
          <a href="#showreel" className="hero-button primary">Watch Showreel</a>
          <a href="#work" className="hero-button secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 