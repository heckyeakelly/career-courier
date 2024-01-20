// Import necessary React libraries
import React from 'react';
import './Footer.css';

// Define the main Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <div className="logo">Site Logo</div>
        <div className="social-media">
          {/* Add your social media icons or links here */}
          <a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          {/* Add more social media icons as needed */}
        </div>
      </div>

      <div className="column">
        <div className="contact-info">
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          {/* Add more contact information as needed */}
        </div>
      </div>

      <div className="column">
        <div className="subscription">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          {/* Add a subscription form or call-to-action button */}
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
