// src/pages/CombinedCommunityPage.jsx

import React from 'react';
import Communities from '../pages/Communities';
import Community from '../pages/Community';
import CommunityTab from '../components/CommunityTab';

const CombinedCommunityPage = () => {
  return (
    <div>
      <h1>Communities Overview</h1>
      <div className="communities-info">
        <Communities />
      </div>
      <div className="community-details">
        <Community />
      </div>
      <div className="community-tab">
        <CommunityTab />
      </div>
    </div>
  );
};

export default CombinedCommunityPage;
