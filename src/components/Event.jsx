// src/components/Event.jsx

import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Event({ event }) {
  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <FaCalendarAlt className="text-primary text-3xl" />
        <div>
          <h2 className="text-2xl font-semibold">{event.title}</h2>
          <p className="text-gray-400 text-sm">{new Date(event.date).toLocaleString()}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{event.description}</p>
      <div className="flex items-center space-x-2 text-gray-400">
        <FaMapMarkerAlt />
        <span>{event.location}</span>
      </div>
    </div>
  );
}

export default Event;
