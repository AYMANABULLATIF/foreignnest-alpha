import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Mock login logic
      console.log('Logging in with:', formData);
      // Redirect to home or dashboard after successful login
      navigate('/');
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>
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
      <button type="submit" className={styles.submitButton}>
        Login
      </button>
      <p className={styles.redirect}>
        Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </form>
  );
}

LoginForm.propTypes = {
  // Define prop types if needed in the future
};

export default LoginForm;
