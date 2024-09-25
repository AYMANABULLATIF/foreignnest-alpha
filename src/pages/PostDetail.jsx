// src/pages/PostDetail.jsx

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function PostDetail() {
  const { id } = useParams();

  // Mock data for demonstration. Replace with actual data fetching logic.
  const [post, setPost] = useState({
    id,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/50',
    content: 'This is a detailed view of the post.',
    image: 'https://via.placeholder.com/600x400',
    likes: 25,
    comments: [
      { id: 1, user: 'Alice', comment: 'Great post!', rating: 5 },
      { id: 2, user: 'Bob', comment: 'Thanks for sharing.', rating: 4 },
      { id: 3, user: 'Charlie', comment: 'Very informative.', rating: 5 },
      // Add more comments as needed
    ],
    shares: 3,
  });

  const [newComment, setNewComment] = useState({
    user: '',
    comment: '',
    rating: 5,
  });

  const [filter, setFilter] = useState('newest');

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const { user, comment, rating } = newComment;
    if (!user || !comment) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedComments = [
      ...post.comments,
      { id: post.comments.length + 1, user, comment, rating: parseInt(rating) },
    ];

    setPost((prev) => ({
      ...prev,
      comments: updatedComments,
    }));

    setNewComment({
      user: '',
      comment: '',
      rating: 5,
    });
  };

  const sortedComments = [...post.comments].sort((a, b) => {
    if (filter === 'newest') {
      return b.id - a.id;
    } else if (filter === 'oldest') {
      return a.id - b.id;
    } else if (filter === 'highest') {
      return b.rating - a.rating;
    } else if (filter === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  return (
    <MainLayout>
      <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src={post.avatar} alt="Profile" className="rounded-full w-16 h-16" />
          <div>
            <h2 className="text-xl font-semibold">{post.name}</h2>
            <p className="text-gray-400">Location Placeholder</p>
          </div>
        </div>
        <p className="text-lg mb-4">{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="w-full h-auto rounded-md mb-4" />}
        <div className="flex justify-around text-gray-400 border-t border-gray-700 pt-2">
          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
            <FaStar />
            <span>{post.likes} Like{post.likes !== 1 && 's'}</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200">
            <FaStar />
            <span>{post.shares} Share{post.shares !== 1 && 's'}</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Comments</h2>
          <div>
            <label htmlFor="filter" className="mr-2">Sort By:</label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-800 text-white p-1 rounded"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>
        {sortedComments.length > 0 ? (
          sortedComments.map((comment) => (
            <div key={comment.id} className="mb-4">
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <strong>{comment.user}</strong>
                <span className="text-gray-400">({comment.rating} ⭐)</span>
              </div>
              <p className="ml-6">{comment.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No comments yet.</p>
        )}

        {/* Add Comment Form */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
              <input
                type="text"
                name="user"
                value={newComment.user}
                onChange={handleCommentChange}
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="comment"
                value={newComment.comment}
                onChange={handleCommentChange}
                placeholder="Your Comment"
                className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Rating</label>
              <select
                name="rating"
                value={newComment.rating}
                onChange={handleCommentChange}
                className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[5, 4, 3, 2, 1].map((star) => (
                  <option key={star} value={star}>
                    {star} {star === 1 ? 'Star' : 'Stars'}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

PostDetail.propTypes = {
  // Define prop types if needed
};

export default PostDetail;
