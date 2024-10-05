import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CreateCommunityPostForm.module.css';

function CreateCommunityPostForm({ onCreatePost }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.title.trim()) {
      tempErrors.title = 'Title is required.';
    }
    if (!formData.description.trim()) {
      tempErrors.description = 'Description is required.';
    }
    // Image URL is optional but should be a valid URL if provided
    if (formData.image && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i.test(formData.image)) {
      tempErrors.image = 'Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif.';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newPost = {
        id: Date.now(),
        user: 'CurrentUser', // Replace with actual user data
        userAvatar: '/assets/images/default-avatar.png', // Replace with actual avatar
        title: formData.title.trim(),
        description: formData.description.trim(),
        image: formData.image.trim(),
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: [],
      };
      onCreatePost(newPost);
      setFormData({ title: '', description: '', image: '' });
      setErrors({});
    }
  };

  return (
    <form className={styles.createPostForm} onSubmit={handleSubmit} noValidate>
      <h2>Create a New Community Post</h2>
      <div className={styles.formGroup}>
        <label htmlFor="title">Post Title:</label>
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
        <label htmlFor="description">Post Description:</label>
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
        <label htmlFor="image">Post Image URL (optional):</label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className={errors.image ? styles.inputError : ''}
          placeholder="https://example.com/post.jpg"
        />
        {errors.image && <span className={styles.error}>{errors.image}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>
        Create Post
      </button>
    </form>
  );
}

CreateCommunityPostForm.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};

export default CreateCommunityPostForm;
