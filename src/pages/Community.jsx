// src/pages/Community.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
//import PropTypes from 'prop-types';

function Community() {
  const [communities, ] = useState([
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
      <h1 className="text-2xl font-bold mb-6">Manage Communities</h1>
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search communities..."
          className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        {/* Available Communities */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">Available Communities</h2>
          <ul className="space-y-2">
            {filteredCommunities.length > 0 ? (
              filteredCommunities.map((community, index) => (
                <li key={index} className="flex justify-between items-center bg-darkCard p-2 rounded-lg">
                  <span>{community}</span>
                  {joinedCommunities.includes(community) ? (
                    <button
                      onClick={() => handleLeave(community)}
                      className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg"
                    >
                      Leave
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoin(community)}
                      className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-lg"
                    >
                      Join
                    </button>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-400">No communities found.</p>
            )}
          </ul>
        </div>

        {/* Joined Communities */}
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">Joined Communities</h2>
          <ul className="space-y-2">
            {joinedCommunities.length > 0 ? (
              joinedCommunities.map((community, index) => (
                <li key={index} className="flex justify-between items-center bg-darkCard p-2 rounded-lg">
                  <span>{community}</span>
                  <button
                    onClick={() => handleLeave(community)}
                    className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-lg"
                  >
                    Leave
                  </button>
                </li>
              ))
            ) : (
              <p className="text-gray-400">You have not joined any communities.</p>
            )}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

Community.propTypes = {};

export default Community;
