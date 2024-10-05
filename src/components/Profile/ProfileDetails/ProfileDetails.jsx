import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileDetails.module.css';

function ProfileDetails({ postsCount, followersCount, followingCount }) {
  return (
    <div className={styles.profileDetails}>
      <div className={styles.detail}>
        <span className={styles.number}>{postsCount}</span>
        <span className={styles.label}>Posts</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.number}>{followersCount}</span>
        <span className={styles.label}>Followers</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.number}>{followingCount}</span>
        <span className={styles.label}>Following</span>
      </div>
    </div>
  );
}

ProfileDetails.propTypes = {
  postsCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
};

export default ProfileDetails;
