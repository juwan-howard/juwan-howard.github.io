import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import INFO from '../../data/user';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);
  
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
  
  // Add event listener for clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu when clicking outside nav and menu toggle
      if (menuOpen && 
          navRef.current && 
          menuToggleRef.current &&
          !navRef.current.contains(event.target) && 
          !menuToggleRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add overlay click handler
    const handleOverlayClick = (event) => {
      if (event.target.classList.contains('menu-overlay')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('click', handleOverlayClick);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [menuOpen]);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  // Simple function to close the menu when nav link is clicked
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{INFO.main.name.toUpperCase()}</h1>
          <span className="tagline">FILMMAKER</span>
        </div>
        
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          ref={menuToggleRef}
        >
          <div className="hamburger"></div>
        </div>
        
        <nav 
          className={`nav ${menuOpen ? 'open' : ''}`}
          ref={navRef}
        >
          <ul>
            <li><a href="#work" onClick={handleNavClick}>Work</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Add a clickable overlay for mobile */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header; 