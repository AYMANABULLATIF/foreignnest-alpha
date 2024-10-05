import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterOptions.module.css';

function FilterOptions({ categories, selectedCategory, onFilterChange }) {
  return (
    <div className={styles.filterOptions}>
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

FilterOptions.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterOptions;
