// src/components/Events/EventCard/EventCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventCard.module.css';

function EventCard({ event }) {
  return (
    <div className={styles.eventCard}>
      {event.image && (
        <img src={event.image} alt={event.title} className={styles.eventImage} />
      )}
      <div className={styles.eventContent}>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <p>
          <strong>Date:</strong> {event.date}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <button className={styles.rsvpButton}>RSVP</button>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default EventCard;
