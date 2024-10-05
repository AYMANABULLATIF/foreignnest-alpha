import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../PlaceCard/PlaceCard';
import styles from './PlaceList.module.css';

function PlaceList({ places }) {
  if (places.length === 0) {
    return <p className={styles.noPlaces}>No places found.</p>;
  }

  return (
    <div className={styles.placeList}>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      // Add more fields as necessary
    })
  ).isRequired,
};

export default PlaceList;
