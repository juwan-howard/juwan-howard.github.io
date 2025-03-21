import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Juwan Howard</h3>
            <p>Filmmaker & Cinematographer</p>
            <p className="contact-info">
              <a href="mailto:contact@juwanhoward.com">contact@juwanhoward.com</a>
            </p>
            <p className="contact-info">Los Angeles, CA</p>
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
              <a href="https://vimeo.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-vimeo-v">VI</i>
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
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