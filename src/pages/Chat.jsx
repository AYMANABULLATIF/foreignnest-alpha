// src/pages/Chat.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaPaperPlane, FaUserCircle, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Chat() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Syrians in Japan',
      messages: [
        { id: 1, sender: 'Alice', content: 'Hello everyone!', timestamp: '10:00 AM' },
        { id: 2, sender: 'You', content: 'Hi Alice!', timestamp: '10:02 AM' },
      ],
    },
    {
      id: 2,
      name: 'Iraqis in Japan',
      messages: [
        { id: 1, sender: 'Bob', content: 'Good morning!', timestamp: '9:00 AM' },
        { id: 2, sender: 'You', content: 'Good morning, Bob!', timestamp: '9:05 AM' },
      ],
    },
    {
      id: 3,
      name: 'James Syrian in Japan',
      messages: [
        { id: 1, sender: 'James', content: 'Anyone up for a meetup this weekend?', timestamp: '8:00 AM' },
      ],
    },
    {
      id: 4,
      name: 'Olézzr Spanish in Japan',
      messages: [
        { id: 1, sender: 'Olézzr', content: 'Hola! How is everyone doing?', timestamp: '7:30 AM' },
      ],
    },
    // Add more conversations as needed
  ]);

  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSelectChat = (chat) => {
    setCurrentChat(chat);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !currentChat) return;
    const message = {
      id: currentChat.messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === currentChat.id
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
    setNewMessage('');
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Chat Rooms</h1>
      <div className="flex flex-col md:flex-row h-80 bg-darkCard rounded-lg overflow-hidden shadow-lg">
        {/* Chat List */}
        <div className="md:w-1/3 bg-darkBackground p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Conversations</h2>
          <ul className="space-y-2">
            {conversations.map((chat) => (
              <li key={chat.id}>
                <button
                  onClick={() => handleSelectChat(chat)}
                  className={`w-full text-left p-2 rounded-lg ${
                    currentChat && currentChat.id === chat.id
                      ? 'bg-blue-600'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <FaUsers />
                    <span>{chat.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="md:w-2/3 bg-darkCard p-4 flex flex-col">
          {currentChat ? (
            <>
              <h2 className="text-xl font-semibold mb-4">{currentChat.name}</h2>
              <div className="flex-grow bg-darkBackground p-4 rounded-lg overflow-y-auto mb-4">
                {currentChat.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'You' ? 'justify-end' : 'justify-start'
                    } mb-2`}
                  >
                    {msg.sender !== 'You' && <FaUserCircle className="text-blue-500 mr-2" size={24} />}
                    <div
                      className={`bg-gray-700 text-white p-2 rounded-lg ${
                        msg.sender === 'You' ? 'bg-blue-600' : 'bg-gray-700'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs text-gray-400">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-400">Select a conversation to start chatting.</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

Chat.propTypes = {};

export default Chat;
