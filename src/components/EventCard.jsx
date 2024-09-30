// src/components/EventCard.jsx

import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function EventCard({ title, date, location }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center space-x-2 text-gray-400">
        <FaCalendarAlt />
        <span>{date}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-400 mt-2">
        <FaMapMarkerAlt />
        <span>{location}</span>
      </div>
    </div>
  );
}

export default EventCard;
