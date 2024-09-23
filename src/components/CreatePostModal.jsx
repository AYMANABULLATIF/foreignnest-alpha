// src/components/CreatePostModal.jsx

import React, { useState, useEffect } from 'react';
import { FaTimes, FaImage, FaPoll, FaSave } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Modal from './Modal'; // Ensure Modal.jsx exists and is correctly exported

const CreatePostModal = ({ isOpen, onClose, onCreate }) => {
  // State for post type: 'text', 'image', 'poll'
  const [postType, setPostType] = useState('text');

  // State for form inputs
  const [formData, setFormData] = useState({
    content: '',
    image: '',
    pollQuestion: '',
    pollOptions: ['', ''], // Start with two options
  });

  // State for handling drafts
  const [drafts, setDrafts] = useState([]);

  // Load drafts from localStorage on component mount
  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem('foreignnest_drafts')) || [];
    setDrafts(savedDrafts);
  }, []);

  // Save drafts to localStorage whenever drafts state changes
  useEffect(() => {
    localStorage.setItem('foreignnest_drafts', JSON.stringify(drafts));
  }, [drafts]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle poll option changes
  const handlePollOptionChange = (index, value) => {
    const newOptions = [...formData.pollOptions];
    newOptions[index] = value;
    setFormData((prev) => ({ ...prev, pollOptions: newOptions }));
  };

  // Add a new poll option
  const addPollOption = () => {
    if (formData.pollOptions.length < 4) { // Limit to 4 options
      setFormData((prev) => ({ ...prev, pollOptions: [...prev.pollOptions, ''] }));
    }
  };

  // Remove a poll option
  const removePollOption = (index) => {
    const newOptions = formData.pollOptions.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, pollOptions: newOptions }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (postType === 'text' && !formData.content.trim()) {
      alert('Post content cannot be empty.');
      return;
    }
    if (postType === 'image') {
      if (!formData.content.trim() || !formData.image.trim()) {
        alert('Please provide both description and image URL.');
        return;
      }
    }
    if (postType === 'poll') {
      if (!formData.pollQuestion.trim()) {
        alert('Poll question cannot be empty.');
        return;
      }
      const filledOptions = formData.pollOptions.filter(opt => opt.trim() !== '');
      if (filledOptions.length < 2) {
        alert('Please provide at least two poll options.');
        return;
      }
    }

    // Create post object
    const newPost = {
      id: Date.now(),
      type: postType,
      content: postType !== 'poll' ? formData.content : formData.pollQuestion,
      image: postType === 'image' ? formData.image : null,
      pollOptions: postType === 'poll' ? formData.pollOptions.filter(opt => opt.trim() !== '') : [],
      createdAt: new Date(),
      // Add additional fields as needed, e.g., user info
    };

    // Invoke the onCreate callback with the new post
    onCreate(newPost);

    // Reset form
    setFormData({
      content: '',
      image: '',
      pollQuestion: '',
      pollOptions: ['', ''],
    });
    setPostType('text');

    // Close the modal
    onClose();
  };

  // Handle saving as draft
  const handleSaveDraft = () => {
    const draft = {
      id: Date.now(),
      postType,
      formData,
      savedAt: new Date(),
    };
    setDrafts((prev) => [...prev, draft]);
    alert('Draft saved successfully!');

    // Reset form
    setFormData({
      content: '',
      image: '',
      pollQuestion: '',
      pollOptions: ['', ''],
    });
    setPostType('text');

    // Close the modal
    onClose();
  };

  // Handle loading a draft
  const handleLoadDraft = (draft) => {
    setPostType(draft.postType);
    setFormData(draft.formData);
    onClose(); // Close the modal after loading
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-darkCard p-6 rounded-lg w-full max-w-lg mx-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Create a Post</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <FaTimes size={20} />
          </button>
        </div>

        {/* Drafts Section */}
        {drafts.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-300 mb-2">Saved Drafts</h3>
            <ul className="space-y-2 max-h-32 overflow-y-auto">
              {drafts.map((draft) => (
                <li key={draft.id} className="flex justify-between items-center bg-gray-700 p-2 rounded">
                  <span className="text-sm text-gray-200">
                    {draft.postType.charAt(0).toUpperCase() + draft.postType.slice(1)} Draft
                  </span>
                  <button
                    onClick={() => handleLoadDraft(draft)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    Load
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Post Type Selection */}
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={() => setPostType('text')}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              postType === 'text' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            } hover:bg-blue-500 transition`}
          >
            <FaPoll />
            <span>Text</span>
          </button>
          <button
            type="button"
            onClick={() => setPostType('image')}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              postType === 'image' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            } hover:bg-blue-500 transition`}
          >
            <FaImage />
            <span>Image</span>
          </button>
          <button
            type="button"
            onClick={() => setPostType('poll')}
            className={`flex items-center space-x-2 px-4 py-2 rounded ${
              postType === 'poll' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            } hover:bg-blue-500 transition`}
          >
            <FaPoll />
            <span>Poll</span>
          </button>
        </div>

        {/* Post Form */}
        <form onSubmit={handleSubmit}>
          {/* Text Post */}
          {postType === 'text' && (
            <div className="mb-4">
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
          )}

          {/* Image Post */}
          {postType === 'image' && (
            <>
              <div className="mb-4">
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Describe your image..."
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Poll Post */}
          {postType === 'poll' && (
            <>
              <div className="mb-4">
                <input
                  type="text"
                  name="pollQuestion"
                  value={formData.pollQuestion}
                  onChange={handleChange}
                  placeholder="Poll Question"
                  className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                {formData.pollOptions.map((option, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => handlePollOptionChange(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                      className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {formData.pollOptions.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removePollOption(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                        aria-label={`Remove Option ${index + 1}`}
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>
                ))}
                {formData.pollOptions.length < 4 && (
                  <button
                    type="button"
                    onClick={addPollOption}
                    className="text-blue-400 hover:underline mt-2"
                  >
                    Add another option
                  </button>
                )}
              </div>
            </>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-md transition duration-200"
            >
              <FaSave />
              <span>Save as Draft</span>
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

// Define propTypes outside the component
CreatePostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,    // Controls the visibility of the modal
  onClose: PropTypes.func.isRequired,   // Function to close the modal
  onCreate: PropTypes.func.isRequired,  // Function to handle the creation of a new post
};

export default CreatePostModal;
