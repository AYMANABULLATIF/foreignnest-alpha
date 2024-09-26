// src/components/CommunityTab.jsx

import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { FaPlus, FaTrash,  } from 'react-icons/fa';
import Modal from './Modal';

function CommunityTab() {
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Foreigners around the world' },
    { id: 2, name: 'Syrians in Japan' },
    { id: 3, name: 'Iraqis in Japan' },
    // Add more communities as needed
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommunity, setNewCommunity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddCommunity = () => {
    if (newCommunity.trim() === '') return;
    const newId = communities.length > 0 ? communities[communities.length - 1].id + 1 : 1;
    setCommunities([...communities, { id: newId, name: newCommunity }]);
    setNewCommunity('');
    setIsModalOpen(false);
  };

  const handleDeleteCommunity = (id) => {
    setCommunities(communities.filter((community) => community.id !== id));
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Communities</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center space-x-2"
        >
          <FaPlus />
          <span>Add Community</span>
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Communities"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
        />
      </div>

      <ul className="space-y-2">
        {filteredCommunities.map((community) => (
          <li key={community.id} className="flex justify-between items-center bg-gray-700 p-2 rounded-lg">
            <span>{community.name}</span>
            <button
              onClick={() => handleDeleteCommunity(community.id)}
              className="text-red-500 hover:text-red-700"
              aria-label={`Delete ${community.name}`}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {/* Add Community Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-darkCard p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Add New Community</h2>
          <input
            type="text"
            value={newCommunity}
            onChange={(e) => setNewCommunity(e.target.value)}
            placeholder="Community Name"
            className="w-full bg-gray-800 text-white p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleAddCommunity}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

CommunityTab.propTypes = {};

export default CommunityTab;
