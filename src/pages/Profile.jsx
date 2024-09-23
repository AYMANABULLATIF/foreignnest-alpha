// src/pages/Profile.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaEdit, FaCamera } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Passionate about connecting communities and fostering growth.',
    avatar: 'https://via.placeholder.com/150',
    nationality: 'Syrian',
    language: 'Arabic, English',
    location: 'Tokyo, Japan',
    interests: 'Traveling, Cooking, Photography',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const avatarUrl = URL.createObjectURL(file);
      setEditProfile((prev) => ({ ...prev, avatar: avatarUrl }));
    }
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-darkCard p-6 rounded-lg shadow-lg flex space-x-6">
        <div className="relative">
          <img src={profile.avatar} alt="Avatar" className="w-32 h-32 rounded-full object-cover" />
          <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer">
            <FaCamera />
            <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
          </label>
        </div>
        <div className="flex-grow">
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editProfile.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editProfile.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={editProfile.bio}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={editProfile.nationality}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Language</label>
                <input
                  type="text"
                  name="language"
                  value={editProfile.language}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={editProfile.location}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-1">Interests</label>
                <input
                  type="text"
                  name="interests"
                  value={editProfile.interests}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <FaEdit />
                <span>Save</span>
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-400">{profile.email}</p>
              <p className="mt-4">{profile.bio}</p>
              <p className="mt-2">
                <strong>Nationality:</strong> {profile.nationality}
              </p>
              <p className="mt-2">
                <strong>Language:</strong> {profile.language}
              </p>
              <p className="mt-2">
                <strong>Location:</strong> {profile.location}
              </p>
              <p className="mt-2">
                <strong>Interests:</strong> {profile.interests}
              </p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

Profile.propTypes = {};

export default Profile;
