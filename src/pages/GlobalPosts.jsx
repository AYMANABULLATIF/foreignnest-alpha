// src/pages/GlobalPosts.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import CreatePostModal from '../components/CreatePostModal';

function GlobalPosts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      nationality: 'American',
      location: 'New York, USA',
      content: 'Excited to connect with the ForeignNest community!',
      image: null,
      likes: 25,
      comments: 5,
      shares: 2,
      type: 'text',
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      nationality: 'Mexican',
      location: 'Mexico City, Mexico',
      content: 'Check out this beautiful sunset I captured.',
      image: 'https://via.placeholder.com/300x200',
      likes: 40,
      comments: 10,
      shares: 5,
      type: 'image',
    },
    // Add more posts as needed
  ]);

  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Global Posts</h1>
        <button
          onClick={() => setIsCreatePostModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
        >
          <FaThumbsUp />
          <span>Create Post</span>
        </button>
      </div>

      {/* Post Cards */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onCreate={handleCreatePost}
      />
    </MainLayout>
  );
}

const PostCard = ({ post }) => (
  <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 border border-gray-700">
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full w-16 h-16" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{post.name}</h2>
          <p className="text-sm text-gray-400">{post.location}</p>
        </div>
      </div>
    </div>

    <p className="text-lg leading-relaxed bg-darkBackground p-4 rounded-md shadow-inner">
      {post.content}
    </p>

    {post.image && (
      <img src={post.image} alt="Post" className="w-full h-auto rounded-md" />
    )}

    {/* Post Actions (Like, Comment, Share) */}
    <div className="mt-4 flex justify-around text-gray-400 border-t border-gray-700 pt-2">
      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
        <FaThumbsUp />
        <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
      </button>
      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
        <FaComment />
        <span>{post.comments} Comment{post.comments !== 1 && 's'}</span>
      </button>
      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
        <FaShare />
        <span>{post.shares} Share{post.shares !== 1 && 's'}</span>
      </button>
    </div>
  </div>
);

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default GlobalPosts;
