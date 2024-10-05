import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png'; // Adjust the path as needed
import { FaHome, FaUser, FaRss, FaQuestionCircle, FaComments, FaMapMarkerAlt, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <NavLink to="/">
          <img src={logo} alt="ForeignNest Logo" className={styles.logo} />
        </NavLink>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaHome className={styles.icon} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/feed" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaRss className={styles.icon} />
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/qna" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaQuestionCircle className={styles.icon} />
            QnA
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaComments className={styles.icon} />
            Chat
          </NavLink>
        </li>
        <li>
          <NavLink to="/places" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaMapMarkerAlt className={styles.icon} />
            Places
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaUser className={styles.icon} />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/logout" className={({ isActive }) => (isActive ? styles.active : '')}>
            <FaSignOutAlt className={styles.icon} />
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
