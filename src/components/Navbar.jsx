// src/components/Navbar.jsx (Updated to use ThemeContext)

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaPlus, FaSun, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

const Navbar = ({ toggleSidebar = () => {} }) => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`fixed top-0 left-0 right-0 ${darkMode ? 'bg-gray-900' : 'bg-darkAccent'} text-white p-4 flex justify-between items-center shadow-md z-50`}>
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 text-xl">
          <FaBars />
        </button>
        <Link to="/" className="text-2xl font-bold">
          ForeignNest
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/local-posts" className="hover:text-blue-400">
          Local Posts
        </Link>
        <Link to="/global-posts" className="hover:text-blue-400">
          Global Posts
        </Link>
        <Link to="/places" className="hover:text-blue-400">
          Places
        </Link>
        <Link to="/communities" className="hover:text-blue-400">
          Communities
        </Link>
        <Link to="/profile" className="hover:text-blue-400">
          Profile
        </Link>
        <Link to="/qna" className="hover:text-blue-400">
          Q&A Forum
        </Link>
        <Link to="/events" className="hover:text-blue-400">
          Events
        </Link>
        <Link to="/chat" className="hover:text-blue-400">
          Chat
        </Link>
        <button
          onClick={() => navigate('/create-post')}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center space-x-2"
        >
          <FaPlus />
          <span>Create Post</span>
        </button>
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-xl"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default Navbar;
