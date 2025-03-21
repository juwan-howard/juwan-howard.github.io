import React, { useState, useEffect } from 'react';
import './Header.css';
import INFO from '../../data/user';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Add useEffect to handle body class and prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Cleanup function
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Close menu when clicking on a navigation link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{INFO.main.name.toUpperCase()}</h1>
          <span className="tagline">NARRATIVE DIRECTOR & FILMMAKER</span>
        </div>
        
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#work" onClick={handleNavClick}>Work</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#showreel" onClick={handleNavClick}>Showreel</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 