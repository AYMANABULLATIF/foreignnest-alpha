import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SignupForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.username) {
      tempErrors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      tempErrors.username = 'Username must be at least 3 characters.';
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }

    if (!formData.password) {
      tempErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock signup logic
      console.log('Signing up with:', formData);
      // Redirect to login or dashboard after successful signup
      navigate('/login');
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit} noValidate>
      <h2>Sign Up</h2>
      <div className={styles.formGroup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? styles.inputError : ''}
          required
        />
        {errors.username && <span className={styles.error}>{errors.username}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.inputError : ''}
          required
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? styles.inputError : ''}
          required
        />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? styles.inputError : ''}
          required
        />
        {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
      <p className={styles.redirect}>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </form>
  );
}

SignupForm.propTypes = {
  // Define prop types if needed in the future
};

export default SignupForm;
