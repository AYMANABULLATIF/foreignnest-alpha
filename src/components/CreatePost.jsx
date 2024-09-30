// src/components/CreatePost.jsx

import React, { useState } from 'react';
import { FaImage, FaPaperPlane } from 'react-icons/fa';

function CreatePost({ addNewPost }) {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() === '') return;

    const newPost = {
      id: Date.now(),
      user: 'Current User', // Replace with actual user data
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: new Date().toISOString(),
      text: postText,
      image: postImage,
      likes: 0,
      comments: [],
    };

    addNewPost(newPost);
    setPostText('');
    setPostImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // For demonstration, using a URL. In production, upload the image and get the URL.
      const imageUrl = URL.createObjectURL(file);
      setPostImage(imageUrl);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-md">
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        rows={3}
        required
      ></textarea>
      {postImage && (
        <img src={postImage} alt="Post" className="w-full h-auto rounded-md mt-4" />
      )}
      <div className="flex items-center justify-between mt-4">
        <label className="flex items-center text-gray-400 hover:text-white cursor-pointer">
          <FaImage className="mr-2" />
          <span>Attach Image</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
        </label>
        <button type="submit" className="flex items-center space-x-2 bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
          <FaPaperPlane />
          <span>Post</span>
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
