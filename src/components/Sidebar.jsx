// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPoll, FaGlobe, FaUser, FaCalendarAlt, FaComments, FaQuestionCircle } from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/local-posts', name: 'Local Posts', icon: <FaPoll /> },
    { path: '/global-posts', name: 'Global Posts', icon: <FaGlobe /> },
    { path: '/profile', name: 'Profile', icon: <FaUser /> },
    { path: '/events', name: 'Events', icon: <FaCalendarAlt /> },
    { path: '/chat', name: 'Chat', icon: <FaComments /> },
    { path: '/qna', name: 'Q&A Forum', icon: <FaQuestionCircle /> },
  ];

  return (
    <aside className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-darkAccent text-white p-6">
      <h2 className="text-2xl font-bold mb-8">ForeignNest</h2>
      <ul className="space-y-6">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`flex items-center space-x-3 p-2 rounded-md ${
                isActive(link.path) ? 'bg-blue-600 text-link' : 'hover:bg-darkBackground'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
