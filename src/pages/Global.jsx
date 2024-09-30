// src/pages/Global.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Post from '../components/Post';
import EventCard from '../components/EventCard';
import PlaceCard from '../components/PlaceCard';
import CreatePost from '../components/CreatePost';

function Global() {
  // Sample data for global posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'David Lee',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '2024-04-26T10:00:00Z',
      text: 'Just arrived in Tokyo! Looking forward to meeting new people.',
      image: 'https://via.placeholder.com/600x400',
      likes: 20,
      comments: [
        { id: 1, user: 'Eva Green', text: 'Welcome to Japan!' },
        { id: 2, user: 'Frank Miller', text: 'Let us know if you need any tips.' },
      ],
    },
    // Add more global posts
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Global Activities</h1>
      <CreatePost addNewPost={addNewPost} />
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mt-6">
        {/* Main Feed */}
        <div className="flex-1 space-y-6">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 space-y-6">
          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
            <EventCard
              title="Global Tech Summit"
              date="June 15, 2024"
              location="Tokyo International Forum"
            />
            <EventCard
              title="International Meetup"
              date="July 5, 2024"
              location="Shinjuku Central Park"
            />
            {/* Add more EventCards as needed */}
          </div>

          {/* Places Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Places to Visit</h2>
            <PlaceCard
              name="Shibuya Crossing"
              description="Experience the world’s busiest pedestrian crossing."
              image="https://via.placeholder.com/400x200"
            />
            <PlaceCard
              name="Asakusa Temple"
              description="Historic temple offering a glimpse into traditional Japan."
              image="https://via.placeholder.com/400x200"
            />
            {/* Add more PlaceCards as needed */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Global;
