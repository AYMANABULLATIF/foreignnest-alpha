// src/components/CreateEvent.jsx

import React, { useState } from 'react';
import { FaCalendarPlus } from 'react-icons/fa';

function CreateEvent({ addNewEvent }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventData.title || !eventData.date || !eventData.location || !eventData.description) {
      alert('Please fill in all fields.');
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...eventData,
    };

    addNewEvent(newEvent);
    setEventData({
      title: '',
      date: '',
      location: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
        <FaCalendarPlus />
        <span>Create New Event</span>
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Event Title</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-primary hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
            Create Event
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateEvent;
