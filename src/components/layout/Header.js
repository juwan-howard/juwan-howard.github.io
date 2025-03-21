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
  
  // Close menu when clicking on a navigation link and scroll to section
  const handleNavClick = (e) => {
    e.preventDefault();
    
    // Get the target section from the href attribute
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    // First close the menu
    setMenuOpen(false);
    
    // Wait for menu animation to complete before scrolling
    setTimeout(() => {
      if (targetElement) {
        // Account for header height when scrolling
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Match this with your menu transition time
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>{INFO.main.name.toUpperCase()}</h1>
          <span className="tagline">NARRATIVE DIRECTOR & FILMMAKER</span>
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
            <li><a href="#showreel" onClick={handleNavClick}>Showreel</a></li>
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