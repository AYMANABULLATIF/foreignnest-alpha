// src/components/CreateQuestion.jsx

import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

function CreateQuestion({ addNewQuestion }) {
  const [questionText, setQuestionText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionText.trim() === '') return;

    const newQuestion = {
      id: Date.now(),
      user: 'Current User', // Replace with actual user data
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: new Date().toISOString(),
      text: questionText,
      likes: 0,
      answers: [],
    };

    addNewQuestion(newQuestion);
    setQuestionText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-md">
      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Ask a question..."
        className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        rows={3}
        required
      ></textarea>
      <button
        type="submit"
        className="flex items-center space-x-2 bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg mt-2"
      >
        <FaQuestionCircle />
        <span>Ask</span>
      </button>
    </form>
  );
}

export default CreateQuestion;
