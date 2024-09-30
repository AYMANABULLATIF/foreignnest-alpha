// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-gray-200 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} ForeignNest. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://github.com/yourusername/foreignnest" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          LinkedIn
        </a>
        {/* Add more links as needed */}
      </div>
    </footer>
  );
}

export default Footer;
