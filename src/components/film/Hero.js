import React from 'react';
import './Hero.css';
import INFO from '../../data/user';
import silhouetteImg from '../../assets/silhouette.jpg';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${silhouetteImg})`
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">VISUAL STORYTELLER</h1>
        <p className="hero-subtitle">{INFO.about.tagline}</p>
        <div className="hero-buttons">
          <a href="#showreel" className="hero-button primary">Watch Showreel</a>
          <a href="#work" className="hero-button secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 