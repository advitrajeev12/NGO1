import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Assuming you're using a separate CSS file for the footer
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import youtube from '../assets/icons/youtube.png';
import pinterest from '../assets/icons/pinterest.png';

const Footer = () => {
  return (
    <>
      {/* Donation Uplift Section */}
      <div className="donation-uplift-section">
        <div className="donation-uplift-box">
          <h2>Your Donation Uplifts Women and Sustains Traditional Crafts.</h2>
          <Link to="/donations/donation" className="donation-btn">Donate Now</Link> {/* Using Link for routing */}
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/mission">Mission & Vision</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="footer-section">
            <h3>Explore</h3>
            <ul>
              <li><a href="/about-ngo">About Our NGO</a></li>
              <li><a href="/team">Meet The Team</a></li>
              <li><a href="/news">News & Media</a></li>
              <li>
                <a
                  href="https://www.mystore.in/en/seller/rupak?srsltid=AfmBOooYRM7GBi-wtCxwaqKe_kJwu6AAoYUSxp1YY6W_l4CIIZ9KWTgz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop with us
                </a>
              </li>
            </ul>
          </div>

          {/* Donation Section */}
          <div className="footer-section">
            <h3>Donations</h3>
            <ul>
              <li><a href="/donations/donation">Make a Donation</a></li>
              <li><a href="/donations/donation">Why We Donate?</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="footer-section">
            <h3>Subscribe to our Newsletter</h3>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/profile.php?id=100064711629557&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/baljyoti_org?igsh=MWFvY3plNm9kMG9kMQ==" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://youtube.com/@baljyoti_org?si=9kpm37Brlvc6ezgJ" target="_blank" rel="noopener noreferrer">
                <img src={youtube} alt="YouTube" className="social-icon" />
              </a>
              <a href="https://pin.it/7cGYk6XTK" target="_blank" rel="noopener noreferrer">
                <img src={pinterest} alt="Pinterest" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Your NGO. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
