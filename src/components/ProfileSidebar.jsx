// src/components/ProfileSidebar.jsx
import React, { useState } from 'react';
import { FaPoll } from 'react-icons/fa';
import CreatePostModal from './CreatePostModal';
import PropTypes from 'prop-types';

const ProfileSidebar = ({ user }) => {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  
  // Handler for creating a new post
  const handleCreatePost = (post) => {
    // Implement logic to add the new post to the appropriate feed
    console.log('New Post:', post);
    // For example, you might lift the state up to a context or a parent component
  };
  
  return (
    <div className="bg-darkCard p-4 rounded-lg shadow-lg mb-6 w-full lg:w-1/4">
      <div className="flex items-center space-x-4">
        <img
          src={user.profileImage || 'https://via.placeholder.com/100'}
          alt="Profile"
          className="rounded-full w-16 h-16"
        />
        <div>
          <h2 className="text-lg font-bold text-white">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.nationality} living in {user.location}</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={() => setIsCreatePostOpen(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          <FaPoll />
          <span>Create Post</span>
        </button>
      </div>
      
      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onCreate={handleCreatePost}
      />
    </div>
  );
};

// Define PropTypes
ProfileSidebar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default ProfileSidebar;
