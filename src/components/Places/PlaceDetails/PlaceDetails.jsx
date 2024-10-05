import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceDetails.module.css';

function PlaceDetails({ place }) {
  return (
    <div className={styles.placeDetails}>
      <img src={place.image} alt={`${place.name}`} className={styles.image} />
      <div className={styles.content}>
        <h2>{place.name}</h2>
        <p className={styles.category}>Category: {place.category}</p>
        <p className={styles.location}>Location: {place.location}</p>
        <p className={styles.description}>{place.description}</p>
        {/* Add more details as needed, such as maps, contact info, etc. */}
      </div>
    </div>
  );
}

PlaceDetails.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaceDetails;
