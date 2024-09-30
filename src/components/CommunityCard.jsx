// src/components/CommunityCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

function CommunityCard({ name, description, isJoined, onJoin, onLeave }) {
  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="mt-4">
        {isJoined ? (
          <button
            onClick={onLeave}
            className="flex items-center space-x-2 bg-danger hover:bg-red-700 text-white py-2 px-4 rounded-lg w-full"
          >
            <FaUserMinus />
            <span>Leave</span>
          </button>
        ) : (
          <button
            onClick={onJoin}
            className="flex items-center space-x-2 bg-success hover:bg-green-700 text-white py-2 px-4 rounded-lg w-full"
          >
            <FaUserPlus />
            <span>Join</span>
          </button>
        )}
      </div>
    </div>
  );
}

CommunityCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isJoined: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default CommunityCard;
