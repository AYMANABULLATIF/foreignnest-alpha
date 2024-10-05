import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostList';
import styles from './LocalFeed.module.css';

function LocalFeed({ localPosts }) {
  return (
    <div className={styles.localFeed}>
      <h2>Local Feed</h2>
      <PostList posts={localPosts} />
    </div>
  );
}

LocalFeed.propTypes = {
  localPosts: PropTypes.array.isRequired,
};

export default LocalFeed;
