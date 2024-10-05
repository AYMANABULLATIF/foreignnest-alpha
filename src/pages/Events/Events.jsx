// src/pages/Events/Events.jsx
import React, { useContext, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import EventsList from 'components/Events/EventsList/EventsList';
import CreateEventForm from 'components/Events/CreateEventForm/CreateEventForm';
import { CommunityContext } from '../../context/CommunityContext';
import styles from './Events.module.css';

function Events() {
  const { posts, addCommunityPost } = useContext(CommunityContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on search term
  const filteredEvents = posts.filter((post) => {
    // Assuming events have a specific category or a flag
    const isEvent = post.category === 'Event';
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return isEvent && matchesSearch;
  });

  return (
    <div className={styles.eventsPage}>
      <Header />
      <Navbar />
      <main className={styles.mainContent}>
        <CreateEventForm onCreateEvent={addCommunityPost} />
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <EventsList events={filteredEvents} />
      </main>
      <Footer />
    </div>
  );
}

export default Events;
