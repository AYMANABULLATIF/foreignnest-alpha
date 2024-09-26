// src/pages/CommunityManagement.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
//import PropTypes from 'prop-types';
import { FaPlus, FaSearch, FaTrash } from 'react-icons/fa';

function CommunityManagement() {
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Foreigners in Tokyo', description: 'A community for foreigners living in Tokyo.' },
    { id: 2, name: 'Syrians in Japan', description: 'Connecting Syrians residing in Japan.' },
    // Add more communities as needed
  ]);

  const [newCommunity, setNewCommunity] = useState({ name: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCommunity((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCommunity = (e) => {
    e.preventDefault();
    if (!newCommunity.name.trim() || !newCommunity.description.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    setCommunities([
      ...communities,
      { id: communities.length + 1, name: newCommunity.name, description: newCommunity.description },
    ]);
    setNewCommunity({ name: '', description: '' });
  };

  const handleDeleteCommunity = (id) => {
    if (window.confirm('Are you sure you want to delete this community?')) {
      setCommunities(communities.filter((community) => community.id !== id));
    }
  };

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Communities</h1>
      <div className="mb-6 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Communities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
          <FaSearch />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCommunities.map((community) => (
          <div key={community.id} className="bg-darkCard p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{community.name}</h2>
              <p className="text-gray-400">{community.description}</p>
            </div>
            <button
              onClick={() => handleDeleteCommunity(community.id)}
              className="text-red-500 hover:text-red-700"
              title="Delete Community"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Add Community Form */}
      <div className="mt-8 bg-darkCard p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Community</h2>
        <form onSubmit={handleAddCommunity} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Community Name</label>
            <input
              type="text"
              name="name"
              value={newCommunity.name}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Description</label>
            <textarea
              name="description"
              value={newCommunity.description}
              onChange={handleChange}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <FaPlus />
            <span>Add Community</span>
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

CommunityManagement.propTypes = {};

export default CommunityManagement;
