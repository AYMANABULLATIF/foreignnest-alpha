// src/components/PostCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  const commentPreview = post.comments.slice(0, 2); // Show first 2 comments as preview

  return (
    <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg mb-6 flex flex-col space-y-4 border border-gray-700">
      <div className="flex justify-between">
        <div className="flex items-center space-x-4">
          <img src={post.avatar || 'https://via.placeholder.com/50'} alt="Profile" className="rounded-full w-16 h-16" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{post.name}</h2>
            <p className="text-sm text-gray-400">{post.location}</p>
          </div>
        </div>
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

      {/* Comment Previews */}
      {commentPreview.length > 0 && (
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2">Comments Preview</h3>
          {commentPreview.map((comment) => (
            <div key={comment.id} className="mb-2">
              <strong>{comment.user}:</strong> {comment.comment}
            </div>
          ))}
          {post.comments.length > 2 && (
            <Link to={`/post/${post.id}`} className="text-blue-400 hover:underline">
              View all comments
            </Link>
          )}
        </div>
      )}

      {/* Post Actions */}
      <div className="mt-4 flex justify-around text-gray-400 border-t border-gray-700 pt-2">
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaThumbsUp />
          <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
        </button>
        <Link to={`/post/${post.id}`} className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaComment />
          <span>{post.comments.length} Comment{post.comments.length !== 1 && 's'}</span>
        </Link>
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaShare />
          <span>{post.shares} Share{post.shares !== 1 && 's'}</span>
        </button>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    nationality: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
    shares: PropTypes.number.isRequired,
    tag: PropTypes.string,
  }).isRequired,
};

export default PostCard;
