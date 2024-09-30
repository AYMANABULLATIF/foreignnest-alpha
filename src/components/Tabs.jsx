// src/components/Tabs.jsx

import React, { useState } from 'react';

function Tabs({ tabs, onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (name) => {
    setActiveTab(name);
    onTabChange(name);
  };

  return (
    <div className="flex justify-center space-x-6 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => handleTabClick(tab.name)}
          className={`py-2 px-4 rounded-lg focus:outline-none ${
            activeTab === tab.name
              ? 'bg-primary text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          } transition-colors duration-200`}
        >
          {tab.icon}
          <span className="ml-2">{tab.name}</span>
        </button>
      ))}
    </div>
  );
}

export default Tabs;
