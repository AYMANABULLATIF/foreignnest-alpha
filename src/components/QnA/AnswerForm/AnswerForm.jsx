import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AnswerForm.module.css';

function AnswerForm({ onAddAnswer }) {
  const [answerText, setAnswerText] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAnswerText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answerText.trim() === '') {
      setError('Answer cannot be empty.');
      return;
    }

    const newAnswer = {
      id: Date.now(),
      user: 'CurrentUser', // Replace with actual user data
      text: answerText.trim(),
    };

    onAddAnswer(newAnswer);
    setAnswerText('');
    setError('');
  };

  return (
    <form className={styles.answerForm} onSubmit={handleSubmit}>
      <textarea
        value={answerText}
        onChange={handleChange}
        placeholder="Your answer..."
        className={error ? styles.textareaError : ''}
        required
      />
      {error && <span className={styles.error}>{error}</span>}
      <button type="submit" className={styles.submitButton}>
        Submit Answer
      </button>
    </form>
  );
}

AnswerForm.propTypes = {
  onAddAnswer: PropTypes.func.isRequired,
};

export default AnswerForm;
