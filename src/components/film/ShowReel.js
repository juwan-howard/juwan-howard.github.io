import React from 'react';
import './ShowReel.css';
import INFO from '../../data/user';

const ShowReel = () => {
  return (
    <section id="showreel" className="showreel-section">
      <div className="showreel-container">
        <div className="section-header">
          <h2>Show Reel</h2>
          <p>A glimpse into my directing style</p>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe 
              src={INFO.showreel.url} 
              title="Juwan Howard Director's Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        <div className="showreel-info">
          <div className="info-column">
            <h3>Director</h3>
            <p>Juwan Howard</p>
          </div>
          <div className="info-column">
            <h3>Focus</h3>
            <p>Narrative Direction</p>
          </div>
          <div className="info-column">
            <h3>Year</h3>
            <p>2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowReel; 