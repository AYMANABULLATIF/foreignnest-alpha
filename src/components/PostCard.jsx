// src/components/PostCard.jsx
import React from 'react';
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return (
    <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg mb-6">
      {/* Post Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <img src={post.userImage || 'https://via.placeholder.com/50'} alt={`${post.name}'s profile`} className="rounded-full w-12 h-12" />
          <div>
            <h3 className="font-bold">{post.name}</h3>
            <p className="text-sm text-secondaryText">
              {post.nationality} living in {post.location}
            </p>
          </div>
        </div>
        <FaEllipsisH className="text-gray-400 cursor-pointer" />
      </div>

      {/* Post Content */}
      <div className="mb-4">
        {post.type === 'text' && <p>{post.content}</p>}
        {post.type === 'image' && (
          <img src={post.image} alt="Post" className="w-full h-auto rounded-lg mb-4" />
        )}
        {post.type === 'poll' && (
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="font-bold mb-2">{post.content}</p>
            {post.pollOptions.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  name={`poll-${post.id}`}
                  id={`option-${index}`}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded">
              Vote
            </button>
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex justify-between text-gray-400 border-t border-gray-700 pt-2">
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaThumbsUp />
          <span>{post.likes} Likes</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaComment />
          <span>{post.comments} Comments</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
          <FaShare />
          <span>{post.shares} Shares</span>
        </button>
      </div>
    </div>
  );
};

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
    pollOptions: PropTypes.arrayOf(PropTypes.string),
    userImage: PropTypes.string,
  }).isRequired,
};

export default PostCard;
