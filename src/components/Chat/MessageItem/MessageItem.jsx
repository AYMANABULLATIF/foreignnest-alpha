import React from 'react';
import PropTypes from 'prop-types';
import styles from './MessageItem.module.css';

function MessageItem({ message }) {
  return (
    <div className={styles.messageItem}>
      <div className={styles.messageHeader}>
        <span className={styles.user}>{message.user}</span>
        <span className={styles.timestamp}>{message.timestamp}</span>
      </div>
      <p className={styles.text}>{message.text}</p>
    </div>
  );
}

MessageItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageItem;
