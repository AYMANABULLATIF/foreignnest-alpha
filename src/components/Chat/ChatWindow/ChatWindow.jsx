import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../MessageItem/MessageItem';
import styles from './ChatWindow.module.css';

function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages update
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.chatWindow}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

ChatWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ChatWindow;
