// src/components/Events/EventsList/EventsList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../EventCard/EventCard';
import styles from './EventsList.module.css';

function EventsList({ events }) {
  if (events.length === 0) {
    return <p className={styles.noEvents}>No events available.</p>;
  }

  return (
    <div className={styles.eventsList}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

EventsList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      userAvatar: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default EventsList;
