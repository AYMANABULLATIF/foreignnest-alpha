import React from 'react';
import PropTypes from 'prop-types';
import CommunityPostItem from '../CommunityPostItem/CommunityPostItem';
import styles from './CommunityFeed.module.css';

function CommunityFeed({ posts }) {
  if (posts.length === 0) {
    return <p className={styles.noPosts}>No community posts available.</p>;
  }

  return (
    <div className={styles.communityFeed}>
      {posts.map((post) => (
        <CommunityPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

CommunityFeed.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      userAvatar: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          user: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default CommunityFeed;
