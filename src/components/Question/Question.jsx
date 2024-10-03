// src/components/Question.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaThumbsUp, FaReply } from 'react-icons/fa';
import Answer from './Answer';

function Question({ question }) {
  const [likes, setLikes] = useState(question.likes || 0);
  const [answers, setAnswers] = useState(question.answers || []);
  const [showAnswerBox, setShowAnswerBox] = useState(false);
  const [newAnswer, setNewAnswer] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleAnswerBox = () => {
    setShowAnswerBox(!showAnswerBox);
  };

  const handleAddAnswer = (e) => {
    e.preventDefault();
    if (newAnswer.trim() === '') return;
    const answer = {
      id: answers.length + 1,
      user: 'Current User', // Replace with actual user data
      text: newAnswer,
    };
    setAnswers([...answers, answer]);
    setNewAnswer('');
    setShowAnswerBox(false);
  };

  // Format timestamp to a readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust as needed
  };

  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Question Header */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={question.userAvatar || 'https://via.placeholder.com/50'}
          alt={`${question.user}'s avatar`}
          className="rounded-full w-12 h-12"
        />
        <div>
          <h2 className="text-xl font-semibold">{question.user}</h2>
          <p className="text-gray-400 text-sm">{formatTimestamp(question.timestamp)}</p>
        </div>
      </div>

      {/* Question Content */}
      <p className="text-gray-300 mb-4">{question.text}</p>

      {/* Actions */}
      <div className="flex items-center space-x-6 mb-4">
        <button onClick={handleLike} className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200">
          <FaThumbsUp />
          <span>{likes} Like{likes !== 1 && 's'}</span>
        </button>
        <button onClick={toggleAnswerBox} className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200">
          <FaReply />
          <span>Answer</span>
        </button>
      </div>

      {/* Answer Box */}
      {showAnswerBox && (
        <form onSubmit={handleAddAnswer} className="mb-4">
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Your answer..."
            className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit Answer
          </button>
        </form>
      )}

      {/* Answers Section */}
      {answers.length > 0 && (
        <div className="space-y-4">
          {answers.map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
      )}
    </div>
  );
}
Question.propTypes = {
    question: PropTypes.shape({
      likes: PropTypes.number.isRequired,
      answers: PropTypes.arrayOf(PropTypes.object).isRequired,
      userAvatar: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };
export default Question;
