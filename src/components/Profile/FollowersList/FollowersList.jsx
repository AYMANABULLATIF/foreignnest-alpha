import React from 'react';
import PropTypes from 'prop-types';
import styles from './FollowersList.module.css';

function FollowersList({ followers }) {
  if (followers.length === 0) {
    return <p className={styles.noFollowers}>You have no followers yet.</p>;
  }

  return (
    <div className={styles.followersList}>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id} className={styles.followerItem}>
            <img src={follower.avatar} alt={`${follower.name}'s avatar`} className={styles.avatar} />
            <span>{follower.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

FollowersList.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FollowersList;
