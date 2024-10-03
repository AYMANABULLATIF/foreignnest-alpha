// src/pages/PostDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams(); // Line 9
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual data fetching logic
    fetch(`/api/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading post.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 mb-6">By {post.author} | {post.date}</p>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded mb-6" />
      )}
      <div className="prose prose-invert">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostDetail;
