// src/components/ChangeCommunityModal.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function ChangeCommunityModal({ isOpen, onClose, currentCommunity, onChange }) {
  const [selectedCommunity, setSelectedCommunity] = useState(currentCommunity);
  const communities = [
    'Foreigners around the world',
    'Syrians in Japan',
    'Iraqis in Japan',
    'Spanish in Japan',
    'Americans in Japan',
    // Add more communities as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ value: selectedCommunity });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-xl font-bold mb-4">Change Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Select Community</label>
            <select
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {communities.map((community, index) => (
                <option key={index} value={community}>
                  {community}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Change
          </button>
        </form>
      </div>
    </Modal>
  );
}

ChangeCommunityModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentCommunity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChangeCommunityModal;
