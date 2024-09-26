// src/components/SearchBar.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ searchTerm, setSearchTerm, placeholder }) {
  return (
    <div className="flex items-center bg-gray-800 p-2 rounded-lg">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-800 text-white focus:outline-none"
      />
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: 'Search...',
};

export default SearchBar;
