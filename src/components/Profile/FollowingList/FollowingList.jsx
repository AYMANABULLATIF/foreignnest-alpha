import React from 'react';
import PropTypes from 'prop-types';
import styles from './FollowingList.module.css';

function FollowingList({ following }) {
  if (following.length === 0) {
    return <p className={styles.noFollowing}>You are not following anyone yet.</p>;
  }

  return (
    <div className={styles.followingList}>
      <h2>Following</h2>
      <ul>
        {following.map((user) => (
          <li key={user.id} className={styles.followingItem}>
            <img src={user.avatar} alt={`${user.name}'s avatar`} className={styles.avatar} />
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

FollowingList.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FollowingList;
