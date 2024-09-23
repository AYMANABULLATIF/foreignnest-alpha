// src/components/ChangeCommunityModal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Modal from './Modal'; // Ensure you have a generic Modal component

const ChangeCommunityModal = ({ isOpen, onClose, currentCommunity, onChange }) => {
  const communityOptions = [
    { value: 'All Communities', label: 'All Communities' },
    { value: 'Arab', label: 'Arab' },
    { value: 'African', label: 'African' },
    { value: 'American', label: 'American' },
    { value: 'Syrian', label: 'Syrian' },
    // Add more communities as needed
  ];

  const handleCommunitySelect = (selectedOption) => {
    onChange(selectedOption);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-darkCard p-6 rounded-lg w-full max-w-md mx-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Change Community</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>

        {/* Community Selection */}
        <div className="mb-4">
          <Select
            options={communityOptions}
            defaultValue={communityOptions.find(option => option.value === currentCommunity)}
            onChange={handleCommunitySelect}
            className="text-black"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose();
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

ChangeCommunityModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentCommunity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChangeCommunityModal;
