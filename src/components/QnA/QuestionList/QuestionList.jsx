import React from 'react';
import PropTypes from 'prop-types';
import QuestionItem from '../QuestionItem/QuestionItem';
import styles from './QuestionList.module.css';

function QuestionList({ questions }) {
  if (questions.length === 0) {
    return <p className={styles.noQuestions}>No questions have been asked yet.</p>;
  }

  return (
    <div className={styles.questionList}>
      {questions.map((question) => (
        <QuestionItem key={question.id} question={question} />
      ))}
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default QuestionList;
