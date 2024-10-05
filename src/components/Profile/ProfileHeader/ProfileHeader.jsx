import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileHeader.module.css';

function ProfileHeader({ coverPhoto, avatar, name, bio }) {
  return (
    <div className={styles.profileHeader}>
      <img src={coverPhoto} alt="Cover" className={styles.coverPhoto} />
      <div className={styles.avatarContainer}>
        <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  coverPhoto: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
};

ProfileHeader.defaultProps = {
  bio: '',
};

export default ProfileHeader;
