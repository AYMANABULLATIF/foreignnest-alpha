// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout'; // Corrected import path
import PropTypes from 'prop-types';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Login with:', form.email, form.password);
    // Proceed with login (e.g., API call)
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-darkBackground">
        <div className="w-full max-w-md bg-darkCard rounded-lg shadow-lg p-8 space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? 'border-red-500' : 'border-gray-600'
                } p-3 rounded-lg bg-darkBackground text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-link`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className={`w-full border ${
                  errors.password ? 'border-red-500' : 'border-gray-600'
                } p-3 rounded-lg bg-darkBackground text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-link`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="text-link hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

Login.propTypes = {};

export default Login;
