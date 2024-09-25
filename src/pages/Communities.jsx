// src/pages/Communities.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaPlus, FaSearch, FaUserPlus, FaUserMinus } from 'react-icons/fa';

function Communities() {
  const [communities, setCommunities] = useState([
    { id: 1, name: 'Syrians in Japan', description: 'A community for Syrians living in Japan.' },
    { id: 2, name: 'Iraqis in Japan', description: 'Connecting Iraqis residing in Japan.' },
    { id: 3, name: 'Spaniards in Japan', description: 'For Spaniards who are living in Japan.' },
    // Add more communities as needed
  ]);

  const [joinedCommunities, setJoinedCommunities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleJoin = (communityId) => {
    if (!joinedCommunities.includes(communityId)) {
      setJoinedCommunities([...joinedCommunities, communityId]);
    }
  };

  const handleLeave = (communityId) => {
    setJoinedCommunities(joinedCommunities.filter((id) => id !== communityId));
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
      <div className="space-y-4">
        {filteredCommunities.map((community) => (
          <CommunityCard
            key={community.id}
            community={community}
            isJoined={joinedCommunities.includes(community.id)}
            onJoin={() => handleJoin(community.id)}
            onLeave={() => handleLeave(community.id)}
          />
        ))}
        {filteredCommunities.length === 0 && (
          <p className="text-gray-400">No communities found.</p>
        )}
      </div>
    </MainLayout>
  );
}

const CommunityCard = ({ community, isJoined, onJoin, onLeave }) => {
  return (
    <div className="bg-darkCard p-4 rounded-lg shadow-lg flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{community.name}</h2>
        <p className="text-gray-400">{community.description}</p>
      </div>
      <div>
        {isJoined ? (
          <button
            onClick={onLeave}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          >
            <FaUserMinus />
            <span>Leave</span>
          </button>
        ) : (
          <button
            onClick={onJoin}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            <FaUserPlus />
            <span>Join</span>
          </button>
        )}
      </div>
    </div>
  );
};

CommunityCard.propTypes = {
  community: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isJoined: PropTypes.bool.isRequired,
  onJoin: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

Communities.propTypes = {};

export default Communities;
