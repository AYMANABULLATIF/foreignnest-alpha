// src/components/HelpGuide.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';
import Modal from './Modal';
import Tooltip from './Tooltip'; // Import Tooltip

function HelpGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <Tooltip text="Need Help?">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <FaInfoCircle size={20} />
        </button>
      </Tooltip>

      {/* Help Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-darkCard p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Help Guide</h2>
          <p className="mb-2">Welcome to ForeignNest! Here are some tips to get you started:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Navigate through different communities using the navbar.</li>
            <li>Create and manage your posts in the Local and Global Posts sections.</li>
            <li>Explore recommended places and add your own reviews.</li>
            <li>Engage in group chats to connect with others.</li>
            <li>Customize your profile to let others know more about you.</li>
          </ul>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

HelpGuide.propTypes = {};

export default HelpGuide;
