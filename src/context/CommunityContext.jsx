import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create the Community Context
export const CommunityContext = createContext();

// Community Provider Component
export const CommunityProvider = ({ children }) => {
  // Mock data for community posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alice',
      userAvatar: '/assets/images/alice-avatar.jpg',
      title: 'Best Places to Visit in Tokyo',
      content: 'Share your favorite spots in Tokyo!',
      timestamp: 'September 21, 2024, 2:00 PM',
      likes: 15,
      comments: [
        {
          id: 1,
          user: 'Bob',
          text: 'I loved Shibuya Crossing!',
        },
      ],
      category: 'Travel',
    },
    {
      id: 2,
      user: 'Charlie',
      userAvatar: '/assets/images/charlie-avatar.jpg',
      title: 'Language Learning Tips',
      content: 'What methods have you found effective for learning a new language?',
      timestamp: 'September 20, 2024, 10:30 AM',
      likes: 20,
      comments: [],
      category: 'Education',
    },
    // Add more mock posts as needed
  ]);

  // Mock data for categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Travel' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Food' },
    { id: 4, name: 'Technology' },
    // Add more categories as needed
  ]);

  // Function to add a new community post
  const addCommunityPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Function to like a post
  const likePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Function to add a comment to a post
  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <CommunityContext.Provider
      value={{
        posts,
        categories,
        addCommunityPost,
        likePost,
        addComment,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

CommunityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
