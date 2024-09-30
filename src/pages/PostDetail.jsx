// src/pages/PostDetail.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function PostDetail() {
  const { id } = useParams();
  // In a real app, fetch the post data from an API or context
  const [post] = useState({
    id: 1,
    name: 'Jane Smith',
    nationality: 'American',
    location: 'New York, USA',
    content: 'Excited to connect with the ForeignNest community!',
    image: 'https://via.placeholder.com/600x400', // Example image URL
    likes: 25,
    comments: [
      { id: 1, user: 'John Doe', text: 'Welcome Jane!' },
      { id: 2, user: 'Alice Johnson', text: 'Glad to have you here.' },
      { id: 3, user: 'Bob Brown', text: 'Looking forward to your posts.' },
    ],
    shares: 2,
    type: 'text',
  });

  const [commentFilter, setCommentFilter] = useState('');

  const filteredComments = post.comments.filter((comment) =>
    comment.text.toLowerCase().includes(commentFilter.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="bg-darkCard text-white p-8 rounded-lg shadow-lg mb-6 border border-gray-700">
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

        <p className="text-lg leading-relaxed bg-background p-6 rounded-md shadow-inner mt-6">
          {post.content}
        </p>

        {post.image && (
          <img src={post.image} alt="Post" className="w-full h-auto rounded-md mt-6" />
        )}

        {/* Post Actions */}
        <div className="mt-6 flex justify-around text-gray-400 border-t border-gray-700 pt-4">
          <button className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
            <FaThumbsUp />
            <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
            <FaComment />
            <span>{post.comments.length} Comment{post.comments.length !== 1 && 's'}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
            <FaShare />
            <span>{post.shares} Share{post.shares !== 1 && 's'}</span>
          </button>
        </div>

        {/* Comment Filter */}
        <div className="mt-6">
          <input
            type="text"
            value={commentFilter}
            onChange={(e) => setCommentFilter(e.target.value)}
            placeholder="Filter comments..."
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Comments Section */}
        <div className="mt-4 space-y-6">
          {filteredComments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4">
              <img src="https://via.placeholder.com/40" alt="User" className="rounded-full w-10 h-10" />
              <div>
                <span className="font-semibold">{comment.user}</span>
                <p className="text-gray-300 mt-1">{comment.text}</p>
              </div>
            </div>
          ))}
          {filteredComments.length === 0 && <p className="text-gray-300">No comments found.</p>}
        </div>
      </div>
    </MainLayout>
  );
}

export default PostDetail;
