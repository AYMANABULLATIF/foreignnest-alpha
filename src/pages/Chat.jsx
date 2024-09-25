// src/pages/Chat.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaPaperPlane, FaUserCircle } from 'react-icons/fa';

function Chat() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'Syrians in Japan',
      messages: [
        { id: 1, sender: 'John Doe', content: 'Hello Syrians in Japan!', timestamp: '10:00 AM' },
        { id: 2, sender: 'You', content: 'Hi John!', timestamp: '10:02 AM' },
      ],
    },
    {
      id: 2,
      name: 'Iraqis in Japan',
      messages: [
        { id: 1, sender: 'Ali Ahmed', content: 'Looking forward to connecting with everyone.', timestamp: '11:00 AM' },
      ],
    },
    {
      id: 3,
      name: 'James Syrian in Japan',
      messages: [],
    },
    {
      id: 4,
      name: 'Olezzr Spanish in Japan',
      messages: [],
    },
    // Add more groups as needed
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedGroup) return;
    const message = {
      id: selectedGroup.messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    const updatedGroups = groups.map((group) =>
      group.id === selectedGroup.id
        ? { ...group, messages: [...group.messages, message] }
        : group
    );
    setGroups(updatedGroups);
    setNewMessage('');
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Chat Groups</h1>
      <div className="flex">
        {/* Groups List */}
        <div className="w-1/3 bg-darkCard p-4 rounded-lg mr-4">
          <h2 className="text-xl font-semibold mb-4">Available Groups</h2>
          <ul className="space-y-2">
            {groups.map((group) => (
              <li
                key={group.id}
                onClick={() => handleSelectGroup(group)}
                className={`p-2 rounded-lg cursor-pointer ${
                  selectedGroup && selectedGroup.id === group.id
                    ? 'bg-blue-600'
                    : 'hover:bg-gray-700'
                }`}
              >
                {group.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        {selectedGroup ? (
          <div className="w-2/3 bg-darkCard p-4 rounded-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4">{selectedGroup.name}</h2>
            <div className="flex-grow overflow-y-auto mb-4">
              {selectedGroup.messages.length > 0 ? (
                selectedGroup.messages.map((msg) => (
                  <Message key={msg.id} message={msg} />
                ))
              ) : (
                <p className="text-gray-400">No messages yet.</p>
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-2/3 bg-darkCard p-4 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Select a group to start chatting.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

const Message = ({ message }) => (
  <div className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-2`}>
    {message.sender !== 'You' && <FaUserCircle className="text-blue-500 mr-2" size={24} />}
    <div className={`bg-gray-700 text-white p-2 rounded-md max-w-xs ${message.sender === 'You' ? 'bg-blue-600' : 'bg-gray-700'}`}>
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
