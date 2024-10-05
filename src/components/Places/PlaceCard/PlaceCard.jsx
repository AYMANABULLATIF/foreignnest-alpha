import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PlaceCard.module.css';

function PlaceCard({ place }) {
  return (
    <div className={styles.placeCard}>
      <img src={place.image} alt={`${place.name}`} className={styles.image} />
      <div className={styles.content}>
        <h3>{place.name}</h3>
        <p className={styles.category}>{place.category}</p>
        <p className={styles.location}>{place.location}</p>
        <Link to={`/places/${place.id}`} className={styles.detailsButton}>
          View Details
        </Link>
      </div>
    </div>
  );
}

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaceCard;
