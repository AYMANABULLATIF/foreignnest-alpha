// src/pages/Communities.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import CommunityCard from '../components/CommunityCard';

function Communities() {
  const [communities] = useState([
    { id: 1, name: 'Syrians in Japan', description: 'A community for Syrians living in Japan.' },
    { id: 2, name: 'Iraqis in Japan', description: 'Connecting Iraqis residing in Japan.' },
    { id: 3, name: 'Spaniards in Japan', description: 'For Spaniards who are living in Japan.' },
    // Add more as needed
  ]);

  const [joined, setJoined] = useState([]);

  const handleJoin = (id) => {
    setJoined([...joined, id]);
  };

  const handleLeave = (id) => {
    setJoined(joined.filter((communityId) => communityId !== id));
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Communities</h1>
      <p className="text-gray-300 mb-6 text-center">
        Explore and join communities that interest you.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {communities.map((community) => (
          <CommunityCard
            key={community.id}
            name={community.name}
            description={community.description}
            isJoined={joined.includes(community.id)}
            onJoin={() => handleJoin(community.id)}
            onLeave={() => handleLeave(community.id)}
          />
        ))}
      </div>
    </MainLayout>
  );
}

export default Communities;
