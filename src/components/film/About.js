import React, { useState } from 'react';
import './About.css';
import INFO from '../../data/user';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
    // Prevent scrolling when modal is open
    document.body.style.overflow = showModal ? 'auto' : 'hidden';
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="lead">
              {INFO.about.title}
            </p>
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
          
          <div className="about-image">
            <img src={INFO.about.profileImage} alt="Juwan Howard - Narrative Director & Filmmaker" />
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