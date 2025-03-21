import React from 'react';
import './Footer.css';
import INFO from '../../data/user';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>{INFO.main.name}</h3>
            <p>Narrative Director & Filmmaker</p>
            <p className="contact-info">
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>
            </p>
            <p className="contact-info">{INFO.main.location}</p>
          </div>
          
          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#showreel">Showreel</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram">IG</i>
              </a>
              <a href="https://vimeo.com/user217257059" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-vimeo-v">VI</i>
              </a>
              <a href="https://www.linkedin.com/in/juwan-howard-2301851a3/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in">LI</i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Juwan Howard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 