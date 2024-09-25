// src/pages/LocalPosts.jsx (Updated to include Tooltips and Help Guide)

import React, { useState } from 'react';
import {
  FaThumbsUp,
  FaComment,
  FaShare,
  FaEllipsisH,
  FaPoll,
} from 'react-icons/fa';
import MainLayout from '../layouts/MainLayout';
import CreatePostModal from '../components/CreatePostModal';
import ChangeCommunityModal from '../components/ChangeCommunityModal';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import Tooltip from '../components/Tooltip'; // Import Tooltip
import HelpGuide from '../components/HelpGuide'; // Import HelpGuide
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LocalPosts() {
  const [defaultCommunity, setDefaultCommunity] = useState('Foreigners around the world');
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    topic: '',
    date: '',
    engagement: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Sample post data
  const [localPosts, setLocalPosts] = useState([
    {
      id: 1,
      name: 'John Doe',
      nationality: 'Syrian',
      location: 'Tokyo, Japan',
      content: 'Looking for a job in Tokyo. Any advice?',
      image: null,
      likes: 12,
      comments: 3,
      shares: 1,
      type: 'text',
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      nationality: 'Syrian',
      location: 'Kyoto, Japan',
      content: 'Anyone interested in a meetup this weekend?',
      image: 'https://via.placeholder.com/300x200',
      likes: 8,
      comments: 2,
      shares: 4,
      type: 'image',
    },
    // Add more posts as needed
  ]);

  // Handler to create a new post
  const handleCreatePost = (newPost) => {
    setLocalPosts([newPost, ...localPosts]);
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
  const filteredPosts = localPosts.filter((post) => {
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

    const matchesSearch = post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTopic && matchesDate && matchesEngagement && matchesSearch;
  });

  return (
    <MainLayout>
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{defaultCommunity}</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            placeholder="Search posts..."
          />
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg mt-4 lg:mt-0"
          >
            <FaEllipsisH />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setIsCommunityModalOpen(true)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 lg:mt-0"
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

      {/* Help Guide */}
      <HelpGuide />
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

      {/* Nationality, Tag on the right */}
      <div className="text-right">
        <p className="text-sm text-gray-400">{post.nationality}</p>
        <p className="text-sm text-gray-400">{post.tag || 'Community'}</p>
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
      <Tooltip text="Like this post">
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaThumbsUp />
          <span>Like</span>
        </button>
      </Tooltip>
      <Tooltip text="View and add comments">
        <Link to={`/post/${post.id}`} className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaComment />
          <span>Comment</span>
        </Link>
      </Tooltip>
      <Tooltip text="Share this post">
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaShare />
          <span>Share</span>
        </button>
      </Tooltip>
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
    tag: PropTypes.string,
  }).isRequired,
};

export default LocalPosts;
