// src/pages/Chat.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'Hello everyone!', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', content: 'Hi John!', timestamp: '10:02 AM' },
    // Add more messages as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Chat Room</h1>
      <div className="flex flex-col h-80 bg-darkCard rounded-lg p-4 overflow-y-auto">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg"
        >
          <FaPaperPlane />
        </button>
      </div>
    </MainLayout>
  );
}

const Message = ({ message }) => (
  <div className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-2`}>
    {message.sender !== 'You' && <FaUserCircle className="text-blue-500 mr-2" size={24} />}
    <div className="bg-gray-700 text-white p-2 rounded-lg max-w-xs">
      <p>{message.content}</p>
      <span className="text-xs text-gray-400">{message.timestamp}</span>
    </div>
  </div>
);

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Chat;
