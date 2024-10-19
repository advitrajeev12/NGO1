import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import logo from '../../assets/logo.png';
import './Navbar.css'; // Make sure you have relevant CSS here

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleScroll = () => {
    // Toggle darkNav based on scroll position (e.g., 50px)
    if (window.scrollY > 50) {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    // Toggle the mobile menu
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkNav ? 'dark-nav' : ''}`}> {/* Apply dark-nav class when scrolled */}
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">
          <span className="bal-jyoti">Bal Jyoti</span> <span className="foundation">Foundation</span>
        </span>
      </Link>
      
      {/* Menu toggle button for mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}> {/* Add 'active' class if menuOpen is true */}
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li className="navbar-item dropdown">
          <span className="dropdown-toggle">Join Us</span>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/join-us/intern" onClick={() => setMenuOpen(false)}>As Intern</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/join-us/trainee" onClick={() => setMenuOpen(false)}>As Trainee</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/join-us/volunteer" onClick={() => setMenuOpen(false)}>As Volunteer</Link>
            </li>
          </ul>
        </li>
        <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
        <li><Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
      </ul>
      <Link to="/donation">
        <button className="donation-button">Donate</button>
      </Link>
    </nav>
  );
};

export default Navbar;
