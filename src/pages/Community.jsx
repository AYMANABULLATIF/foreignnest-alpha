// src/pages/Community.jsx

import React, { useState, useContext } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { CommunityContext } from '../context/CommunityContext';

function Community() {
  const { currentCommunity, setCurrentCommunity } = useContext(CommunityContext);
  
  const [communities] = useState([
    'Syrians in Japan',
    'Iraqis in Japan',
    'Americans in Japan',
    'Spaniards in Japan',
    // Add more communities as needed
  ]);

  const [joinedCommunities, setJoinedCommunities] = useState([
    'Syrians in Japan',
    'Iraqis in Japan',
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleJoin = (community) => {
    if (!joinedCommunities.includes(community)) {
      setJoinedCommunities([...joinedCommunities, community]);
    }
  };

  const handleLeave = (community) => {
    setJoinedCommunities(joinedCommunities.filter((c) => c !== community));
  };

  const filteredCommunities = communities.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Manage Communities</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search communities..."
          className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Available Communities */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Available Communities</h2>
          <ul className="space-y-4">
            {filteredCommunities.length > 0 ? (
              filteredCommunities.map((community, index) => (
                <li key={index} className="flex justify-between items-center bg-darkCard p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-lg">{community}</span>
                  {joinedCommunities.includes(community) ? (
                    <button
                      onClick={() => handleLeave(community)}
                      className="flex items-center space-x-2 bg-danger hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                    >
                      <FaUserMinus />
                      <span>Leave</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoin(community)}
                      className="flex items-center space-x-2 bg-success hover:bg-green-700 text-white py-2 px-4 rounded-lg"
                    >
                      <FaUserPlus />
                      <span>Join</span>
                    </button>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-300">No communities found.</p>
            )}
          </ul>
        </div>

        {/* Joined Communities */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Joined Communities</h2>
          <ul className="space-y-4">
            {joinedCommunities.length > 0 ? (
              joinedCommunities.map((community, index) => (
                <li key={index} className="flex justify-between items-center bg-darkCard p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-lg">{community}</span>
                  <button
                    onClick={() => handleLeave(community)}
                    className="flex items-center space-x-2 bg-danger hover:bg-red-700 text-white py-2 px-4 rounded-lg"
                  >
                    <FaUserMinus />
                    <span>Leave</span>
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-300">You have not joined any communities.</p>
            )}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default Community;
