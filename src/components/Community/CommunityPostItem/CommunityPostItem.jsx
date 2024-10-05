import React from 'react';
import PropTypes from 'prop-types';
import styles from './CommunityPostItem.module.css';

function CommunityPostItem({ post }) {
  return (
    <div className={styles.communityPostItem}>
      <div className={styles.postHeader}>
        <img src={post.userAvatar} alt={`${post.user}'s avatar`} className={styles.avatar} />
        <div>
          <h4 className={styles.username}>{post.user}</h4>
          <span className={styles.timestamp}>{post.timestamp}</span>
        </div>
      </div>
      <div className={styles.postContent}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        {post.image && <img src={post.image} alt="Post visual content" className={styles.postImage} />}
      </div>
      <div className={styles.postActions}>
        <button className={styles.likeButton}>Like ({post.likes})</button>
        <button className={styles.commentButton}>Comment ({post.comments.length})</button>
      </div>
    </div>
  );
}

CommunityPostItem.propTypes = {
  post: PropTypes.shape({
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
  }).isRequired,
};

export default CommunityPostItem;
