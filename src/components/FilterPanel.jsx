// src/components/FilterPanel.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function FilterPanel({ isOpen, onClose, onApply }) {
  const [filters, setFilters] = useState({
    topic: '',
    date: '',
    engagement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-xl font-bold mb-4">Apply Filters</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Topic</label>
            <input
              type="text"
              name="topic"
              value={filters.topic}
              onChange={handleChange}
              placeholder="Search by topic..."
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={filters.date}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Engagement</label>
            <select
              name="engagement"
              value={filters.engagement}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              <option value="low">Low (&lt;10 likes)</option>
              <option value="medium">Medium (10-20 likes)</option>
              <option value="high">High (&gt;20 likes)</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Apply Filters
          </button>
        </form>
      </div>
    </Modal>
  );
}

FilterPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
};

export default FilterPanel;
