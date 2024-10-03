// src/components/Feed.jsx
import PropTypes from 'prop-types';
import React from 'react';
import Post from './Post';

function Feed({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {posts.length === 0 && (
        <p className="text-gray-300 text-center">No posts available.</p>
      )}
    </div>
  );
}
Feed.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default Feed;
