// src/pages/Local.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Post from '../components/Post';
import EventCard from '../components/EventCard';
import PlaceCard from '../components/PlaceCard';
import CreatePost from '../components/CreatePost';

function Local() {
  // Sample data for local posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Alice Johnson',
      userAvatar: 'https://via.placeholder.com/50',
      timestamp: '2024-04-26T12:00:00Z',
      text: 'Excited to explore the local cuisine in Osaka!',
      image: 'https://via.placeholder.com/600x400',
      likes: 10,
      comments: [
        { id: 1, user: 'Bob Smith', text: 'You should try okonomiyaki!' },
        { id: 2, user: 'Charlie Brown', text: 'Absolutely delicious!' },
      ],
    },
    // Add more local posts
  ]);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Local Activities</h1>
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
              title="Osaka Food Festival"
              date="April 25, 2024"
              location="Osaka Castle Park"
            />
            <EventCard
              title="Local Hiking Meetup"
              date="May 10, 2024"
              location="Mt. Rokko Trails"
            />
            {/* Add more EventCards as needed */}
          </div>

          {/* Places Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Places to Visit</h2>
            <PlaceCard
              name="Dotonbori Street"
              description="Famous for its vibrant nightlife and street food."
              image="https://via.placeholder.com/400x200"
            />
            <PlaceCard
              name="Umeda Sky Building"
              description="Offers stunning panoramic views of Osaka."
              image="https://via.placeholder.com/400x200"
            />
            {/* Add more PlaceCards as needed */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Local;
