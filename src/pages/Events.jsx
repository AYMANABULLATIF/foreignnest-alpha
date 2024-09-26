// src/pages/Events.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

function Events() {
  const [events, ] = useState([
    {
      id: 1,
      title: 'Community Meetup',
      date: '2024-05-20',
      location: 'Tokyo, Japan',
      description: 'Join us for a community meetup to connect and share experiences.',
      attendees: 50,
    },
    {
      id: 2,
      title: 'Cultural Festival',
      date: '2024-06-15',
      location: 'Osaka, Japan',
      description: 'Celebrate cultural diversity with performances, food, and activities.',
      attendees: 120,
    },
    // Add more events as needed
  ]);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Upcoming Events</h1>
      <div className="space-y-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </MainLayout>
  );
}

const EventCard = ({ event }) => (
  <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg flex space-x-4 border border-gray-700">
    <div className="flex-shrink-0">
      <FaCalendarAlt size={40} className="text-blue-500" />
    </div>
    <div>
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="flex items-center text-sm text-gray-400">
        <FaCalendarAlt className="mr-1" /> {event.date}
      </p>
      <p className="flex items-center text-sm text-gray-400">
        <FaMapMarkerAlt className="mr-1" /> {event.location}
      </p>
      <p className="mt-2">{event.description}</p>
      <p className="flex items-center text-sm text-gray-400 mt-2">
        <FaUsers className="mr-1" /> {event.attendees} Attendees
      </p>
    </div>
  </div>
);

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attendees: PropTypes.number.isRequired,
  }).isRequired,
};

export default Events;
