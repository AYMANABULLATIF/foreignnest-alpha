// src/components/FilterPanel.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Modal from './Modal'; // Ensure you have a generic Modal component

const FilterPanel = ({ isOpen, onClose, onApply }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEngagement, setSelectedEngagement] = useState(null);

  const topicOptions = [
    { value: 'Job Search', label: 'Job Search' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Culture', label: 'Culture' },
    // Add more topics as needed
  ];

  const dateOptions = [
    { value: 'Last 24 Hours', label: 'Last 24 Hours' },
    { value: 'Last Week', label: 'Last Week' },
    { value: 'Last Month', label: 'Last Month' },
  ];

  const engagementOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const handleApplyFilters = () => {
    const filters = {
      topic: selectedTopic ? selectedTopic.value : '',
      date: selectedDate ? selectedDate.value : '',
      engagement: selectedEngagement ? selectedEngagement.value : '',
    };
    onApply(filters);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-darkCard p-6 rounded-lg w-full max-w-md mx-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Filter Posts</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-4">
          {/* Topic Filter */}
          <div>
            <label className="block text-gray-300 mb-1">Topic</label>
            <Select
              options={topicOptions}
              value={selectedTopic}
              onChange={setSelectedTopic}
              placeholder="Select Topic..."
              className="text-black"
            />
          </div>

          {/* Date Filter */}
          <div>
            <label className="block text-gray-300 mb-1">Date</label>
            <Select
              options={dateOptions}
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder="Select Date..."
              className="text-black"
            />
          </div>

          {/* Engagement Filter */}
          <div>
            <label className="block text-gray-300 mb-1">Engagement</label>
            <Select
              options={engagementOptions}
              value={selectedEngagement}
              onChange={setSelectedEngagement}
              placeholder="Select Engagement..."
              className="text-black"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyFilters}
            className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

FilterPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default FilterPanel;
