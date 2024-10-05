import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AskQuestionForm.module.css';

function AskQuestionForm({ onAskQuestion }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
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
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newQuestion = {
        id: Date.now(),
        user: 'CurrentUser', // Replace with actual user data
        title: formData.title.trim(),
        description: formData.description.trim(),
        answers: [],
      };
      onAskQuestion(newQuestion);
      setFormData({ title: '', description: '' });
      setErrors({});
    }
  };

  return (
    <form className={styles.askQuestionForm} onSubmit={handleSubmit} noValidate>
      <h2>Ask a Question</h2>
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
      <button type="submit" className={styles.submitButton}>
        Submit Question
      </button>
    </form>
  );
}

AskQuestionForm.propTypes = {
  onAskQuestion: PropTypes.func.isRequired,
};

export default AskQuestionForm;
