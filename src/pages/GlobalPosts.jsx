// src/pages/GlobalPosts.jsx

import React, { useState } from 'react';
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaEllipsisH,
  
} from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';
import CreatePostModal from '../components/CreatePostModal';
import ChangeCommunityModal from '../components/ChangeCommunityModal';
import FilterPanel from '../components/FilterPanel';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function GlobalPosts() {
  const [defaultCommunity, setDefaultCommunity] = useState('Foreigners around the world');
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    topic: '',
    date: '',
    engagement: '',
  });

  // Sample post data
  const [globalPosts, setGlobalPosts] = useState([
    {
      id: 1,
      name: 'Jane Smith',
      nationality: 'American',
      location: 'New York, USA',
      content: 'Excited to connect with the ForeignNest community!',
      image: null,
      likes: 25,
      comments: [
        { id: 1, user: 'John Doe', text: 'Welcome Jane!' },
        { id: 2, user: 'Alice Johnson', text: 'Glad to have you here.' },
      ],
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
      comments: [
        { id: 1, user: 'Maria Garcia', text: 'Stunning view!' },
        { id: 2, user: 'Luis Martinez', text: 'Amazing photo.' },
      ],
      shares: 5,
      type: 'image',
    },
    // Add more posts as needed
  ]);

  // Handler to create a new post
  const handleCreatePost = (newPost) => {
    setGlobalPosts([newPost, ...globalPosts]);
  };

  // Handler to change community
  const handleChangeCommunity = (selectedOption) => {
    setDefaultCommunity(selectedOption.value);
    setIsCommunityModalOpen(false);
    // Optionally, fetch new posts based on the selected community
  };

  // Handler to apply filters
  const handleApplyFilters = (appliedFilters) => {
    setFilters(appliedFilters);
    setIsFilterOpen(false);
    // Implement filtering logic here
  };

  // Filtered Posts based on filters state
  const filteredPosts = globalPosts.filter((post) => {
    const matchesTopic = filters.topic
      ? post.content.toLowerCase().includes(filters.topic.toLowerCase())
      : true;

    const matchesDate = filters.date
      ? new Date(post.id).toISOString().slice(0, 10) === filters.date // Example logic; replace with actual date handling
      : true;

    let matchesEngagement = true;
    if (filters.engagement) {
      if (filters.engagement === 'low') {
        matchesEngagement = post.likes < 10;
      } else if (filters.engagement === 'medium') {
        matchesEngagement = post.likes >= 10 && post.likes < 20;
      } else if (filters.engagement === 'high') {
        matchesEngagement = post.likes >= 20;
      }
    }

    return matchesTopic && matchesDate && matchesEngagement;
  });

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{defaultCommunity}</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg"
          >
            <FaEllipsisH />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setIsCommunityModalOpen(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            <FaEllipsisH />
            <span>Change Community</span>
          </button>
        </div>
      </div>

      {/* Post Cards */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <p className="text-gray-400">No posts available.</p>
        )}
      </div>

      {/* Modals */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        onCreate={handleCreatePost}
      />
      <ChangeCommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
        currentCommunity={defaultCommunity}
        onChange={handleChangeCommunity}
      />
      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />
    </MainLayout>
  );
}

const PostCard = ({ post }) => (
  <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg mb-6 flex flex-col space-y-4 border border-gray-700">
    <div className="flex justify-between">
      <div className="flex items-center space-x-4">
        <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full w-16 h-16" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{post.name}</h2>
          <p className="text-sm text-gray-400">{post.location}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-400">{post.nationality}</p>
      </div>
    </div>

    <p className="text-lg leading-relaxed bg-darkBackground p-4 rounded-md shadow-inner">
      {post.content}
    </p>

    {post.image && (
      <img src={post.image} alt="Post" className="w-full h-auto rounded-md" />
    )}

    {/* Comment Preview */}
    {post.comments.length > 0 && (
      <div className="mt-2">
        <Link to={`/posts/${post.id}`} className="text-blue-400 hover:underline">
          View {post.comments.length} Comment{post.comments.length > 1 && 's'}
        </Link>
        <div className="mt-2">
          {post.comments.slice(0, 2).map((comment) => (
            <div key={comment.id} className="flex items-start space-x-2">
              <img src="https://via.placeholder.com/30" alt="User" className="rounded-full w-8 h-8" />
              <div>
                <span className="font-semibold">{comment.user}</span>
                <p className="text-sm">{comment.text}</p>
              </div>
            </div>
          ))}
          {post.comments.length > 2 && (
            <Link to={`/posts/${post.id}`} className="text-blue-400 hover:underline text-sm">
              View more comments
            </Link>
          )}
        </div>
      </div>
    )}

    {/* Post Actions */}
    <div className="mt-4 flex justify-around text-gray-400 border-t border-gray-700 pt-2">
      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
        <FaThumbsUp />
        <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
      </button>
      <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
        <FaComment />
        <span>{post.comments.length} Comment{post.comments.length !== 1 && 's'}</span>
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
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    shares: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default GlobalPosts;
