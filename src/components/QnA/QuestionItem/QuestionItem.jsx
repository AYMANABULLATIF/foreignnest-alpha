import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerForm from '../AnswerForm/AnswerForm';
import styles from './QuestionItem.module.css';

function QuestionItem({ question }) {
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answers, setAnswers] = useState(question.answers || []);

  const toggleAnswerForm = () => {
    setShowAnswerForm((prev) => !prev);
  };

  const handleAddAnswer = (newAnswer) => {
    setAnswers([...answers, newAnswer]);
    setShowAnswerForm(false);
  };

  return (
    <div className={styles.questionItem}>
      <h3 className={styles.title}>{question.title}</h3>
      <p className={styles.description}>{question.description}</p>
      <p className={styles.user}>Asked by: {question.user}</p>
      <button className={styles.answerButton} onClick={toggleAnswerForm}>
        {showAnswerForm ? 'Cancel' : 'Answer'}
      </button>
      {showAnswerForm && <AnswerForm onAddAnswer={handleAddAnswer} />}
      <div className={styles.answers}>
        <h4>Answers:</h4>
        {answers.length === 0 ? (
          <p>No answers yet.</p>
        ) : (
          answers.map((answer) => (
            <div key={answer.id} className={styles.answer}>
              <p><strong>{answer.user}:</strong> {answer.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

QuestionItem.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default QuestionItem;
