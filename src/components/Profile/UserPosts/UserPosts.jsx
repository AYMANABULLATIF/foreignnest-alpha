import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../../Feed/PostItem/PostItem';
import styles from './UserPosts.module.css';

function UserPosts({ posts }) {
  if (posts.length === 0) {
    return <p className={styles.noPosts}>You haven't made any posts yet.</p>;
  }

  return (
    <div className={styles.userPosts}>
      <h2>Your Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

UserPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      userAvatar: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
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

export default UserPosts;
