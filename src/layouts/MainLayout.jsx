// src/components/MainLayout.jsx

import React from 'react';
import Navbar from '../components/Navbar'; // Ensure Navbar.jsx is in the same directory
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-darkBackground text-white">
      <Navbar />
      <main className="pt-16 px-4 md:px-8 lg:px-16">
        {children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
