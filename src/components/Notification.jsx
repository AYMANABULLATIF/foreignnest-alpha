// src/components/Notification.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const Notification = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-4 right-4 bg-${type === 'success' ? 'green' : 'red'}-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50`}
    >
      <span>{message}</span>
      <button onClick={onClose}>
        <FaTimes />
      </button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Notification;
