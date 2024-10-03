// src/components/Comment.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Comment({ comment }) {
  return (
    <div className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg">
      <FaUserCircle className="text-gray-400 text-3xl" />
      <div>
        <h4 className="text-lg font-semibold">{comment.user}</h4>
        <p className="text-gray-300">{comment.text}</p>
      </div>
    </div>
  );
}
Comment.propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Comment;
