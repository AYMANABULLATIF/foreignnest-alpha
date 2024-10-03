// src/components/Answer.jsx

import React from 'react';
import PropTypes from 'prop-types';

function Answer({ answer }) {
  return (
    <div className="answer">
      <p><strong>{answer.user}:</strong> {answer.text}</p>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;
