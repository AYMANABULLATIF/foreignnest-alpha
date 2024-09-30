// src/pages/Events.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import EventCard from '../components/EventCard';
import CreateEvent from '../components/CreateEvent';

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Osaka Food Festival',
      date: 'April 25, 2024',
      location: 'Osaka Castle Park',
      description: 'Join us for a day of delicious street food and live performances!',
    },
    // Add more events
  ]);

  const addNewEvent = (newEvent) => {
    setEvents([newEvent, ...events]);
  };

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Upcoming Events</h1>
      <CreateEvent addNewEvent={addNewEvent} />
      <div className="space-y-6 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </MainLayout>
  );
}

export default Events;
