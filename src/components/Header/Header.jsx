import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'; // Adjust the path as needed

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="ForeignNest Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
