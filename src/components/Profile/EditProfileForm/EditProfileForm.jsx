import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './EditProfileForm.module.css';

function EditProfileForm({ currentProfile, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    name: currentProfile.name,
    bio: currentProfile.bio,
    avatar: currentProfile.avatar,
    coverPhoto: currentProfile.coverPhoto,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
    }
    // Optional: Validate URLs for avatar and coverPhoto
    const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i;
    if (formData.avatar && !urlPattern.test(formData.avatar)) {
      tempErrors.avatar = 'Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif.';
    }
    if (formData.coverPhoto && !urlPattern.test(formData.coverPhoto)) {
      tempErrors.coverPhoto = 'Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onUpdateProfile(formData);
      setErrors({});
    }
  };

  return (
    <form className={styles.editProfileForm} onSubmit={handleSubmit} noValidate>
      <h2>Edit Profile</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.inputError : ''}
          required
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className={errors.bio ? styles.textareaError : ''}
        />
        {errors.bio && <span className={styles.error}>{errors.bio}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="avatar">Avatar URL:</label>
        <input
          type="url"
          id="avatar"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          className={errors.avatar ? styles.inputError : ''}
          placeholder="https://example.com/avatar.jpg"
        />
        {errors.avatar && <span className={styles.error}>{errors.avatar}</span>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="coverPhoto">Cover Photo URL:</label>
        <input
          type="url"
          id="coverPhoto"
          name="coverPhoto"
          value={formData.coverPhoto}
          onChange={handleChange}
          className={errors.coverPhoto ? styles.inputError : ''}
          placeholder="https://example.com/cover.jpg"
        />
        {errors.coverPhoto && <span className={styles.error}>{errors.coverPhoto}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Save Changes
      </button>
    </form>
  );
}

EditProfileForm.propTypes = {
  currentProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    coverPhoto: PropTypes.string.isRequired,
  }).isRequired,
  onUpdateProfile: PropTypes.func.isRequired,
};

export default EditProfileForm;
