// src/pages/Home.jsx

import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Post from '../components/Post';
import Tabs from '../components/Tabs';
import { Link } from 'react-router-dom';
import { FaUsers, FaPlusCircle, FaComments, FaQuestionCircle, FaCalendarAlt, FaMapMarkerAlt, FaGlobeAmericas } from 'react-icons/fa';
import Modal from '../components/Modal';

function Home() {
  // Sample data combining global and local posts
  const [posts] = useState([
    {
      id: 1,
      user: 'Alice Johnson',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '2 hours ago',
      text: 'Excited to explore the local cuisine in Osaka!',
      image: 'https://via.placeholder.com/600x400',
      likes: 10,
      comments: [
        { id: 1, user: 'Bob Smith', text: 'You should try okonomiyaki!' },
        { id: 2, user: 'Charlie Brown', text: 'Absolutely delicious!' },
      ],
      type: 'Local', // Indicates whether it's a local or global post
    },
    {
      id: 2,
      user: 'David Lee',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '5 hours ago',
      text: 'Joined the local hiking group today. Looking forward to our first trek!',
      image: '',
      likes: 5,
      comments: [
        { id: 1, user: 'Eva Green', text: 'Great! Let us know if you need any gear recommendations.' },
      ],
      type: 'Local',
    },
    {
      id: 3,
      user: 'Grace Hopper',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '1 hour ago',
      text: 'Just arrived in Tokyo! Looking forward to meeting new people.',
      image: 'https://via.placeholder.com/600x400',
      likes: 20,
      comments: [
        { id: 1, user: 'Frank Miller', text: 'Welcome to Japan!' },
        { id: 2, user: 'Hannah Montana', text: 'Let us know if you need any tips.' },
      ],
      type: 'Global',
    },
    {
      id: 4,
      user: 'Ivan Petrov',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '3 hours ago',
      text: 'Participating in the Tokyo Tech Conference next week.',
      image: '',
      likes: 15,
      comments: [
        { id: 1, user: 'Julia Roberts', text: 'Looking forward to your talk!' },
      ],
      type: 'Global',
    },
    // Add more posts as needed
  ]);

  const [activeFeed, setActiveFeed] = useState('Global');

  const filteredPosts = posts.filter((post) => post.type === activeFeed);

  const tabs = [
    { name: 'Global', icon: <FaGlobeAmericas /> },
    { name: 'Local', icon: <FaMapMarkerAlt /> },
  ];

  // State for Disclaimer Modal
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setIsDisclaimerOpen(true);
      localStorage.setItem('hasSeenDisclaimer', 'true');
    }
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative text-center mt-10">
        <img
          src="https://via.placeholder.com/1200x400" // Replace with an actual background image
          alt="Hero Background"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-5xl font-bold text-white">Welcome to ForeignNest</h1>
          <p className="text-gray-300 max-w-lg">
            Connect with expatriates and locals in Japan. Share experiences, join communities, and stay updated with the latest activities.
          </p>
          <div className="space-x-4">
            <Link to="/communities" className="bg-primary hover:bg-blue-500 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
              <FaUsers />
              <span>Explore Communities</span>
            </Link>
            <Link to="/community-management" className="bg-accent hover:bg-orange-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
              <FaPlusCircle />
              <span>Create Community</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="mt-16 flex flex-wrap justify-center space-x-4">
        <Link to="/chat" className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <FaComments />
          <span>Chat</span>
        </Link>
        <Link to="/qna" className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <FaQuestionCircle />
          <span>Q&A</span>
        </Link>
        <Link to="/events" className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <FaCalendarAlt />
          <span>Events</span>
        </Link>
        <Link to="/places" className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg flex items-center space-x-2 transition-colors duration-200">
          <FaMapMarkerAlt />
          <span>Places</span>
        </Link>
      </div>

      {/* Tabs for Global and Local Activities */}
      <div className="mt-16">
        <Tabs tabs={tabs} onTabChange={setActiveFeed} />
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {filteredPosts.length === 0 && <p className="text-gray-300 text-center">No {activeFeed} activities to display.</p>}
        </div>
      </div>

      {/* Disclaimer Modal */}
      <Modal isOpen={isDisclaimerOpen} onClose={() => setIsDisclaimerOpen(false)}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Disclaimer</h2>
          <p className="text-gray-300 mb-6">
            ForeignNest is currently undergoing testing and development. This site is intended for testing purposes and to gather user feedback. Features and functionalities may change as we continue to improve the application. Thank you for your understanding and support!
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsDisclaimerOpen(false)}
              className="bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
}

export default Home;
