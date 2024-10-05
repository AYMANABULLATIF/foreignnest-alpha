// src/components/Events/CreateEventForm/CreateEventForm.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CreateEventForm.module.css';

function CreateEventForm({ onCreateEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.title.trim()) tempErrors.title = 'Title is required.';
    if (!formData.description.trim()) tempErrors.description = 'Description is required.';
    if (!formData.date) tempErrors.date = 'Date is required.';
    if (!formData.location.trim()) tempErrors.location = 'Location is required.';
    // Image URL is optional but should be valid if provided
    if (formData.image && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.image)) {
      tempErrors.image = 'Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newEvent = {
        id: Date.now(),
        user: 'CurrentUser', // Replace with actual user data
        userAvatar: '/assets/images/default-avatar.png', // Replace with actual avatar
        title: formData.title.trim(),
        description: formData.description.trim(),
        date: formData.date,
        location: formData.location.trim(),
        image: formData.image.trim(),
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: [],
        category: 'Event',
      };
      onCreateEvent(newEvent);
      setFormData({ title: '', description: '', date: '', location: '', image: '' });
      setErrors({});
    }
  };

  return (
    <form className={styles.createEventForm} onSubmit={handleSubmit} noValidate>
      <h2>Create a New Event</h2>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? styles.inputError : ''}
          required
        />
        {errors.title && <span className={styles.error}>{errors.title}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? styles.textareaError : ''}
          required
        />
        {errors.description && <span className={styles.error}>{errors.description}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={errors.date ? styles.inputError : ''}
          required
        />
        {errors.date && <span className={styles.error}>{errors.date}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className={errors.location ? styles.inputError : ''}
          required
        />
        {errors.location && <span className={styles.error}>{errors.location}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="image">Image URL (optional):</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className={errors.image ? styles.inputError : ''}
          placeholder="https://example.com/image.jpg"
        />
        {errors.image && <span className={styles.error}>{errors.image}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Create Event
      </button>
    </form>
  );
}

CreateEventForm.propTypes = {
  onCreateEvent: PropTypes.func.isRequired,
};

export default CreateEventForm;
