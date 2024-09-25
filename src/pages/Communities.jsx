// src/pages/Communities.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Modal from '../components/Modal';
import PropTypes from 'prop-types';

function Communities() {
  const [communities, setCommunities] = useState([
    'Foreigners around the world',
    'Syrians in Japan',
    'Iraqis in Japan',
    'Spanish in Japan',
    'Americans in Japan',
    // Add more communities as needed
  ]);

  const [joinedCommunities, setJoinedCommunities] = useState(['Syrians in Japan']);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleJoinCommunity = (community) => {
    if (!joinedCommunities.includes(community)) {
      setJoinedCommunities([...joinedCommunities, community]);
    }
  };

  const handleLeaveCommunity = (community) => {
    setJoinedCommunities(joinedCommunities.filter((c) => c !== community));
  };

  const filteredCommunities = communities.filter((community) =>
    community.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Manage Communities</h1>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search communities..."
          className="w-2/3 p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setIsJoinModalOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
        >
          Join Community
        </button>
      </div>

      <div className="flex space-x-6">
        {/* Joined Communities */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">Joined Communities</h2>
          <ul className="space-y-2">
            {joinedCommunities.map((community, index) => (
              <li key={index} className="flex justify-between items-center p-2 bg-darkCard rounded-lg">
                <span>{community}</span>
                <button
                  onClick={() => handleLeaveCommunity(community)}
                  className="text-red-500 hover:text-red-700"
                >
                  Leave
                </button>
              </li>
            ))}
            {joinedCommunities.length === 0 && <p className="text-gray-400">You have not joined any communities.</p>}
          </ul>
        </div>

        {/* Available Communities */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">Available Communities</h2>
          <ul className="space-y-2">
            {filteredCommunities.map((community, index) => (
              <li key={index} className="flex justify-between items-center p-2 bg-darkCard rounded-lg">
                <span>{community}</span>
                {!joinedCommunities.includes(community) ? (
                  <button
                    onClick={() => handleJoinCommunity(community)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Join
                  </button>
                ) : (
                  <span className="text-green-500">Joined</span>
                )}
              </li>
            ))}
            {filteredCommunities.length === 0 && <p className="text-gray-400">No communities found.</p>}
          </ul>
        </div>
      </div>

      {/* Join Community Modal */}
      <JoinCommunityModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        communities={communities}
        onJoin={handleJoinCommunity}
        joinedCommunities={joinedCommunities}
      />
    </MainLayout>
  );
}

const JoinCommunityModal = ({ isOpen, onClose, communities, onJoin, joinedCommunities }) => {
  const [selectedCommunity, setSelectedCommunity] = useState('');

  const availableCommunities = communities.filter((c) => !joinedCommunities.includes(c));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCommunity) {
      onJoin(selectedCommunity);
      onClose();
      setSelectedCommunity('');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h2 className="text-xl font-bold mb-4">Join a Community</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Select Community</label>
            <select
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Select --</option>
              {availableCommunities.map((community, index) => (
                <option key={index} value={community}>
                  {community}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Join
          </button>
        </form>
      </div>
    </Modal>
  );
};

JoinCommunityModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  communities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onJoin: PropTypes.func.isRequired,
  joinedCommunities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Communities;
