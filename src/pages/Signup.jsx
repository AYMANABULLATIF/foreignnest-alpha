// src/pages/Signup.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaUserPlus } from 'react-icons/fa';

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Signup with:', form.name, form.email, form.password);
    // Proceed with signup (e.g., API call)
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-darkBackground">
        <div className="w-full max-w-md bg-darkCard rounded-lg shadow-lg p-8 space-y-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Sign Up</h1>
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full border ${
                  errors.name ? 'border-red-500' : 'border-gray-600'
                } p-3 rounded-lg bg-darkBackground text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-link`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
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
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className={`w-full border ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                } p-3 rounded-lg bg-darkBackground text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-link`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-200 flex items-center justify-center space-x-2"
            >
              <FaUserPlus />
              <span>Sign Up</span>
            </button>
          </form>
          <div className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-link hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

Signup.propTypes = {};

export default Signup;
