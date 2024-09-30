// src/layouts/MainLayout.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

function MainLayout({ children }) {
  return (
    <div className="bg-background text-text min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
