// src/pages/PostDetail/PostDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {id}</p>
      {/* Implement post details here */}
    </div>
  );
}

export default PostDetail;
