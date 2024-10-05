import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostList';
import styles from './GlobalFeed.module.css';

function GlobalFeed({ globalPosts }) {
  return (
    <div className={styles.globalFeed}>
      <h2>Global Feed</h2>
      <PostList posts={globalPosts} />
    </div>
  );
}

GlobalFeed.propTypes = {
  globalPosts: PropTypes.array.isRequired,
};

export default GlobalFeed;
