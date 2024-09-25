// src/components/PostDetail.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaThumbsUp, FaComment, FaShare, FaFilter,FaPaperPlane,FaUserCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState([
    { id: 1, user: 'Alice', content: 'Great post!' },
    { id: 2, user: 'Bob', content: 'Thanks for sharing.' },
    // Add more comments as needed
  ]);
  const [newComment, setNewComment] = useState('');
  const [filter, setFilter] = useState('');

  if (!post) {
    return (
      <MainLayout>
        <p className="text-gray-400">Post not found.</p>
      </MainLayout>
    );
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: comments.length + 1,
      user: 'You',
      content: newComment,
    };
    setComments([...comments, comment]);
    setNewComment('');
  };

  const filteredComments = comments.filter((c) =>
    c.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full w-16 h-16" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{post.name}</h2>
              <p className="text-sm text-gray-400">{post.location}</p>
            </div>
          </div>
        </div>

        <p className="text-lg leading-relaxed bg-darkBackground p-4 rounded-md shadow-inner mt-4">
          {post.content}
        </p>

        {post.image && (
          <img src={post.image} alt="Post" className="w-full h-auto rounded-md mt-4" />
        )}

        {/* Post Actions */}
        <div className="mt-4 flex justify-around text-gray-400 border-t border-gray-700 pt-2">
          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
            <FaThumbsUp />
            <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
            <FaComment />
            <span>{comments.length} Comment{comments.length !== 1 && 's'}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
            <FaShare />
            <span>{post.shares} Share{post.shares !== 1 && 's'}</span>
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          <div className="flex items-center mb-4">
            <FaFilter className="mr-2" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter comments..."
              className="bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ul className="space-y-4">
            {filteredComments.length > 0 ? (
              filteredComments.map((comment) => (
                <li key={comment.id} className="flex items-start space-x-2">
                  <FaUserCircle className="text-blue-500 mt-1" size={24} />
                  <div>
                    <span className="font-semibold">{comment.user}</span>
                    <p>{comment.content}</p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-400">No comments found.</p>
            )}
          </ul>
          <div className="flex mt-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow bg-gray-800 text-white p-2 rounded-l-lg focus:outline-none"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

PostDetail.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostDetail;
