import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageInput.module.css';

function MessageInput({ onSendMessage }) {
  const [messageText, setMessageText] = useState('');

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim() === '') return;

    const newMessage = {
      id: Date.now(),
      user: 'CurrentUser', // Replace with actual user data
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString(),
    };

    onSendMessage(newMessage);
    setMessageText('');
  };

  return (
    <form className={styles.messageInputForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default MessageInput;
