// src/pages/CreatePost.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import CreatePostModal from '../components/CreatePostModal';

function CreatePost() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(true);

  const handleCreatePost = (newPost) => {
    // Handle the creation of a new post (e.g., update state or send to API)
    console.log('New Post Created:', newPost);
    setIsCreatePostModalOpen(false);
  };

  return (
    <MainLayout>
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onCreate={handleCreatePost}
      />
    </MainLayout>
  );
}

export default CreatePost;
