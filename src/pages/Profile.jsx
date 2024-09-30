// src/pages/Profile.jsx

import React, { useContext, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { CommunityContext } from '../context/CommunityContext';
import { FaEdit, FaCog, FaClipboardList, FaLinkedin, FaGithub } from 'react-icons/fa';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function Profile() {
  const { currentCommunity, joinedCommunities } = useContext(CommunityContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'johndoe',
    email: 'johndoe@example.com',
    bio: 'A passionate expatriate exploring life in Japan.',
    linkedin: 'https://www.linkedin.com/in/ayman-abdullatif-271ba7309/',
    github: 'https://github.com/AYMANABULLATIF',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save logic here (e.g., API call)
    alert('Profile updated successfully!');
    setIsEditModalOpen(false);
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Profile</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* User Information */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="rounded-full w-32 h-32 border-4 border-primary"
          />
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-semibold">{userInfo.username}</h2>
            <p className="text-gray-400">{userInfo.email}</p>
            <p className="text-gray-300 mt-2 text-center md:text-left">{userInfo.bio}</p>
            <div className="flex space-x-4 mt-4">
              <a
                href={userInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors duration-200"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={userInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="mt-4 bg-accent hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
            >
              <FaEdit />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Current Community Information */}
        {currentCommunity && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Current Community</h3>
            <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
              <img
                src={currentCommunity.avatar || 'https://via.placeholder.com/50'}
                alt={`${currentCommunity.name} avatar`}
                className="rounded-full w-12 h-12"
              />
              <div>
                <Link to={`/communities/${currentCommunity.id}`} className="text-xl font-semibold text-primary hover:underline">
                  {currentCommunity.name}
                </Link>
                <p className="text-gray-400">{currentCommunity.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Joined Communities */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Joined Communities</h3>
          {joinedCommunities.length > 0 ? (
            <ul className="space-y-4">
              {joinedCommunities.map((community) => (
                <li key={community.id} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg">
                  <img
                    src={community.avatar || 'https://via.placeholder.com/50'}
                    alt={`${community.name} avatar`}
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <Link to={`/communities/${community.id}`} className="text-xl font-semibold text-primary hover:underline">
                      {community.name}
                    </Link>
                    <p className="text-gray-400">{community.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">You have not joined any communities yet.</p>
          )}
        </div>

        {/* Activity Feed */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Your Activity</h3>
          {/* Example Activity Cards */}
          <ActivityCard
            title="Joined Syrians in Japan"
            timestamp="2 hours ago"
            description="Excited to connect with fellow Syrians in Tokyo!"
          />
          <ActivityCard
            title="Posted in Iraqis in Japan"
            timestamp="1 day ago"
            description="Looking for recommendations on Japanese language schools."
          />
          {/* Add more ActivityCards as needed */}
        </div>

        {/* Settings */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4">Settings</h3>
          <div className="space-y-4">
            <SettingOption
              name="Account Settings"
              icon={<FaCog />}
              onClick={() => alert('Account Settings functionality coming soon!')}
            />
            <SettingOption
              name="Activity Feed Preferences"
              icon={<FaClipboardList />}
              onClick={() => alert('Activity Feed Preferences functionality coming soon!')}
            />
            {/* Add more SettingOptions as needed */}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Edit Profile</h2>
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Bio</label>
              <textarea
                name="bio"
                value={userInfo.bio}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">LinkedIn Profile URL</label>
              <input
                type="url"
                name="linkedin"
                value={userInfo.linkedin}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">GitHub Profile URL</label>
              <input
                type="url"
                name="github"
                value={userInfo.github}
                onChange={handleChange}
                className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <FaEdit />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </MainLayout>
  );
}

// ActivityCard Component
const ActivityCard = ({ title, timestamp, description }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-200">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm">{timestamp}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
};

// SettingOption Component
const SettingOption = ({ name, icon, onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-2xl text-primary">{icon}</div>
      <span className="text-lg">{name}</span>
    </div>
  );
};

export default Profile;
