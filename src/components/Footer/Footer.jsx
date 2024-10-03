import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <img src="/assets/images/logo.png" alt="ForeignNest Logo" className={styles.logo} />
          <p>Connecting communities worldwide.</p>
        </div>
        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className={styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/images/instagram-icon.png" alt="Instagram" />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} ForeignNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
