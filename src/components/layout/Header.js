import React, { useState } from 'react';
import './Header.css';
import INFO from '../../data/user';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#showreel">Showreel</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 