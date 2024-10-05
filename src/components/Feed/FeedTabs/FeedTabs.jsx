import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedTabs.module.css';

function FeedTabs({ activeTab, onTabChange }) {
  return (
    <div className={styles.feedTabs}>
      <button
        className={`${styles.tabButton} ${activeTab === 'local' ? styles.active : ''}`}
        onClick={() => onTabChange('local')}
      >
        Local Feed
      </button>
      <button
        className={`${styles.tabButton} ${activeTab === 'global' ? styles.active : ''}`}
        onClick={() => onTabChange('global')}
      >
        Global Feed
      </button>
    </div>
  );
}

FeedTabs.propTypes = {
  activeTab: PropTypes.oneOf(['local', 'global']).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default FeedTabs;
