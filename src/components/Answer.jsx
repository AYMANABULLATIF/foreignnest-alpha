// src/components/Answer.jsx

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Answer({ answer }) {
  return (
    <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
      <FaUserCircle className="text-gray-400 text-3xl" />
      <div>
        <h4 className="text-lg font-semibold">{answer.user}</h4>
        <p className="text-gray-300">{answer.text}</p>
      </div>
    </div>
  );
}

export default Answer;
