import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="lead">
              I'm a cinematographer and filmmaker with a passion for visual storytelling.
            </p>
            <p>
              With over 5 years of experience in the film industry, I've developed a keen eye for composition, 
              lighting, and visual narratives. My work spans from short films and documentaries to commercials 
              and music videos.
            </p>
            <p>
              I believe in the power of cinematography to evoke emotions and create connections. My approach 
              combines technical precision with artistic sensibility, resulting in visually compelling stories 
              that resonate with audiences.
            </p>
            <p>
              When I'm not behind the camera, I'm constantly exploring new visual techniques, studying classic 
              films, and collaborating with other creative professionals to push the boundaries of visual storytelling.
            </p>
            
            <div className="skills">
              <div className="skill-column">
                <h3>Technical Skills</h3>
                <ul>
                  <li>Digital Cinematography</li>
                  <li>Lighting Design</li>
                  <li>Camera Operation</li>
                  <li>Color Grading</li>
                </ul>
              </div>
              <div className="skill-column">
                <h3>Equipment</h3>
                <ul>
                  <li>Sony FX6</li>
                  <li>Arri Alexa Mini</li>
                  <li>RED Digital Cinema</li>
                  <li>DJI Ronin</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1543536481-4110d6bad0bf?q=80&w=1470" alt="Filmmaker at work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 