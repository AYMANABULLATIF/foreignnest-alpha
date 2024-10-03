// src/components/Post.jsx
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import Comment from './Comment';

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    const comment = {
      id: comments.length + 1,
      user: 'Current User', // Replace with actual user data
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setShowCommentBox(false);
  };

  // Format timestamp to a readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust as needed
  };

  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={post.userAvatar || 'https://via.placeholder.com/50'}
          alt={`${post.user}'s avatar`}
          className="rounded-full w-12 h-12"
        />
        <div>
          <h2 className="text-xl font-semibold">{post.user}</h2>
          <p className="text-gray-400 text-sm">{formatTimestamp(post.timestamp)}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-300 mb-4">{post.text}</p>
      {post.image && (
        <img src={post.image} alt="Post" className="w-full h-auto rounded-md mb-4" />
      )}

      {/* Actions */}
      <div className="flex items-center space-x-6 mb-4">
        <button onClick={handleLike} className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200">
          <FaThumbsUp />
          <span>{likes} Like{likes !== 1 && 's'}</span>
        </button>
        <button onClick={toggleCommentBox} className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200">
          <FaComment />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors duration-200">
          <FaShare />
          <span>Share</span>
        </button>
      </div>

      {/* Comment Box */}
      {showCommentBox && (
        <form onSubmit={handleAddComment} className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Submit Comment
          </button>
        </form>
      )}

      {/* Comments Section */}
      {comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    userAvatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
export default Post;
