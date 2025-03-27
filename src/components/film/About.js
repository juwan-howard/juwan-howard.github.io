import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import './PersonalStatement.css'; // Import dedicated styling for personal statement
import PersonalStatement from './PersonalStatement'; // Import the dedicated component
import INFO from '../../data/user';
// Direct import to ensure the silhouette image is bundled
import silhouetteImage from '../../assets/silhouette2.png';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Force visibility on mount
    if (containerRef.current) {
      // Small delay to allow for any transitions
      setTimeout(() => {
        containerRef.current.classList.add('visible');
      }, 100);
    }
    
    // Create intersection observer to trigger visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  const toggleModal = () => {
    setShowModal(!showModal);
    // Prevent scrolling when modal is open
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log("Image loaded successfully");
  };

  const handleImageError = () => {
    console.error("Error loading image:", INFO.about.profileImage);
    setImageLoaded(false);
  };

  // Fallback options if the main image fails to load
  const fallbackImage = silhouetteImage || "/silhouette2-fallback.png";

  return (
    <section id="about" className="about-section">
      <div className="about-container visible" ref={containerRef} style={{visibility: 'visible', display: 'block'}}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <PersonalStatement text={INFO.about.title} />
            <p>
              {INFO.about.description}
            </p>
            <p>
              {INFO.about.shortBio}
            </p>
            
            <div className="skills">
              <div className="skill-column">
                <h3>Education</h3>
                <ul>
                  {INFO.about.education.map((edu, index) => (
                    <li key={index}>{edu.degree} - {edu.institution}</li>
                  ))}
                </ul>
              </div>
              <div className="skill-column">
                <h3>Focus Areas</h3>
                <ul>
                  <li>Narrative Direction</li>
                  <li>Cultural Storytelling</li>
                  <li>Production Leadership</li>
                  <li>Visual Narrative</li>
                </ul>
              </div>
            </div>
            
            <div className="learn-more">
              <button onClick={toggleModal} className="learn-more-btn">
                Learn more about my work and approach →
              </button>
            </div>
          </div>
          
          <div className="about-image" style={{visibility: 'visible', display: 'block'}}>
            <img 
              src={INFO.about.profileImage || fallbackImage} 
              alt="Juwan Howard - Narrative Director & Filmmaker"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{
                visibility: 'visible',
                opacity: 1,
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            {!imageLoaded && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                color: '#666',
                textAlign: 'center',
                padding: '20px'
              }}>
                Loading image...
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal for full biography */}
      {showModal && (
        <div className="bio-modal">
          <div className="bio-modal-content">
            <div className="bio-modal-header">
              <h2>My Approach to Filmmaking</h2>
              <button className="close-modal" onClick={toggleModal}>×</button>
            </div>
            <div className="bio-modal-body">
              {INFO.about.biography.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About; 