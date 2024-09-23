// src/context/CommunityContext.jsx
import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [currentCommunity, setCurrentCommunity] = useState('Syrians living in Japan');

  return (
    <CommunityContext.Provider value={{ currentCommunity, setCurrentCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};
