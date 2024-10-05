import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommunitySidebar.module.css';
import { FaHashtag } from 'react-icons/fa';

function CommunitySidebar({ categories, onCategorySelect }) {
  return (
    <div className={styles.communitySidebar}>
      <h3>Categories</h3>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => onCategorySelect(category.name)}
            className={styles.categoryItem}
          >
            <FaHashtag className={styles.icon} />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

CommunitySidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CommunitySidebar; // Ensure default export
