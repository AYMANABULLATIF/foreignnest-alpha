// src/pages/PostDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';

function PostDetail() {
  const { id } = useParams();

  // Mock data for demonstration. Replace with actual data fetching logic.
  const post = {
    id,
    name: 'John Doe',
    content: 'This is a detailed view of the post.',
    comments: [
      { id: 1, user: 'Alice', comment: 'Great post!' },
      { id: 2, user: 'Bob', comment: 'Thanks for sharing.' },
      // Add more comments as needed
    ],
  };

  return (
    <MainLayout>
      <div className="bg-darkCard p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Post by {post.name}</h1>
        <p className="mb-4">{post.content}</p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          {post.comments.length > 0 ? (
            post.comments.map((comment) => (
              <div key={comment.id} className="mb-2">
                <strong>{comment.user}:</strong> {comment.comment}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No comments yet.</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

PostDetail.propTypes = {};

export default PostDetail;
