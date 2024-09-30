// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUsers,
  FaPlusCircle,
  FaUserCircle,
  FaGlobeAmericas,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMapSigns,
  FaComments,
  FaQuestionCircle,
} from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Communities', path: '/communities', icon: <FaUsers /> },
    { name: 'Local', path: '/local', icon: <FaMapMarkerAlt /> },
    { name: 'Global', path: '/global', icon: <FaGlobeAmericas /> },
    { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
    { name: 'Places', path: '/places', icon: <FaMapSigns /> },
    { name: 'Chat', path: '/chat', icon: <FaComments /> },
    { name: 'Q&A', path: '/qna', icon: <FaQuestionCircle /> },
    { name: 'Manage Communities', path: '/community-management', icon: <FaPlusCircle /> },
    { name: 'Profile', path: '/profile', icon: <FaUserCircle /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-accent text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-1">
            {/* Optional: Add an icon next to the text */}
            <FaHome className="text-white" />
            <span className="text-white">ForeignNest</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 items-center overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-1 hover:text-gray-300 transition-colors duration-200 whitespace-nowrap ${
                location.pathname === item.path ? 'text-gray-300 underline' : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full ml-4"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
