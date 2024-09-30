// src/context/CommunityContext.jsx

import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [currentCommunity, setCurrentCommunity] = useState(null);
  const [joinedCommunities, setJoinedCommunities] = useState([
    {
      id: 1,
      name: 'Syrians in Japan',
      description: 'A community for Syrians living in Japan.',
      avatar: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Iraqis in Japan',
      description: 'Connecting Iraqis residing in Japan.',
      avatar: 'https://via.placeholder.com/50',
    },
    // Add more communities as needed
  ]);

  return (
    <CommunityContext.Provider
      value={{
        currentCommunity,
        setCurrentCommunity,
        joinedCommunities,
        setJoinedCommunities,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};
