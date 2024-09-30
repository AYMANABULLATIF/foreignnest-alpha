// src/pages/Chat.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice', text: 'Hello everyone!' },
    { id: 2, user: 'Bob', text: 'Hi Alice!' },
    // Add more messages
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: messages.length + 1,
      user: 'Current User', // Replace with actual user data
      text: newMessage,
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Chat</h1>
      <div className="flex flex-col h-[70vh] bg-gray-800 p-4 rounded-lg shadow-md">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.user === 'Current User' ? 'justify-end' : 'justify-start'} mb-2`}
            >
              <div className={`flex items-center space-x-2 ${msg.user === 'Current User' ? 'flex-row-reverse' : ''}`}>
                <FaUserCircle className="text-gray-400 text-3xl" />
                <span className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs break-words">
                  {msg.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={2}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center"
          >
            <FaPaperPlane className="text-xl" />
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default Chat;
