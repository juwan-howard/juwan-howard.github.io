import React from 'react';
import './About.css';
import INFO from '../../data/user';
import { Link } from 'react-router-dom';

const About = () => {
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
              <Link to="/about">Learn more about my work and approach →</Link>
            </div>
          </div>
          
          <div className="about-image">
            <img src={INFO.about.profileImage} alt="Juwan Howard - Narrative Director & Filmmaker" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 