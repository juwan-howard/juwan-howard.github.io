import React from 'react';
import './ShowReel.css';

const ShowReel = () => {
  return (
    <section id="showreel" className="showreel-section">
      <div className="showreel-container">
        <div className="section-header">
          <h2>Show Reel</h2>
          <p>A glimpse into my cinematographic style</p>
        </div>
        
        <div className="video-container">
          {/* This uses a placeholder YouTube video embed - you should replace with your own showreel */}
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/qrO4YZeyl0I" 
              title="Cinematography Show Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        <div className="showreel-info">
          <div className="info-column">
            <h3>Director of Photography</h3>
            <p>Juwan Howard</p>
          </div>
          <div className="info-column">
            <h3>Camera</h3>
            <p>Sony FX6 / Arri Alexa Mini</p>
          </div>
          <div className="info-column">
            <h3>Year</h3>
            <p>2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowReel; 