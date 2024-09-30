// src/pages/Login.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    alert(`Logging in with Email: ${email} and Password: ${password}`);
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-darkCard p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-500 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-accent hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </MainLayout>
  );
}

export default Login;
