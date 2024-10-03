// src/pages/CommunityManagement.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaPlus, FaTrash, FaSearch } from 'react-icons/fa';
import Modal from '../components/Modal';

function CommunityManagement() {
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Foreigners in Tokyo', description: 'A community for foreigners living in Tokyo.' },
    { id: 2, name: 'Syrians in Japan', description: 'Connecting Syrians residing in Japan.' },
    // Add more communities as needed
  ]);

  const [newCommunity, setNewCommunity] = useState({ name: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(false);
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
      <h1 className="text-4xl font-bold mb-6 text-center">Manage Communities</h1>
      <div className="mb-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Search Communities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="bg-primary hover:bg-blue-500 text-white p-3 rounded-lg flex items-center space-x-2">
          <FaSearch />
          <span>Search</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCommunities.map((community) => (
          <div key={community.id} className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{community.name}</h2>
              <p className="text-gray-400">{community.description}</p>
            </div>
            <button
              onClick={() => handleDeleteCommunity(community.id)}
              className="flex items-center space-x-2 bg-danger hover:bg-red-700 text-white py-2 px-4 rounded-lg mt-4"
              title="Delete Community"
            >
              <FaTrash />
              <span>Delete</span>
            </button>
          </div>
        ))}
      </div>

      {/* Add Community Button */}
      <div className="mt-8 text-right">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-success hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <FaPlus />
          <span>Add New Community</span>
        </button>
      </div>

      {/* Add Community Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-darkCard p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Add New Community</h2>
          <form onSubmit={handleAddCommunity} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Community Name</label>
              <input
                type="text"
                name="name"
                value={newCommunity.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={newCommunity.description}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-success hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <FaPlus />
                <span>Add Community</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </MainLayout>
  );
}

export default CommunityManagement;
