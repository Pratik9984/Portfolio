import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll-based background opacity
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / 200, 0.9);
      navbar.style.backgroundColor = `rgba(22, 27, 34, ${0.8 + opacity * 0.2})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg py-3 ${isOpen ? 'open' : ''}`}>
      <div className="container">
        {/* Logo / Brand with bounce effect */}
        <Link className="navbar-brand fw-bold fs-4 logo" to="/">
       <span style={{ color: "#e6edf3" }}>PratikShinde</span><span style={{ color: "#58a6ff" }}>.com</span>
       </Link>


        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            {['/', '/about', '/portfolio', '/services', '/contact'].map((path, index) => {
              const labels = ['Home', 'About', 'Portfolio', 'Services', 'Get in Touch'];
              return (
                <li key={index} className="nav-item">
                  <Link
                    className={`nav-link btn px-3 py-2 rounded-pill ${
                      location.pathname === path ? 'active' : ''
                    }`}
                    to={path}
                  >
                    {labels[index]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;