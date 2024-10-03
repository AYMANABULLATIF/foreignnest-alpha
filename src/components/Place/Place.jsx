// src/components/Place.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

function Place({ place }) {
  return (
    <div className="bg-darkCard p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <FaMapMarkerAlt className="text-primary text-3xl" />
        <div>
          <h2 className="text-2xl font-semibold">{place.name}</h2>
          <p className="text-gray-400 text-sm">{place.location}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{place.description}</p>
      <div className="flex items-center space-x-2">
        <FaStar className="text-yellow-400" />
        <span className="text-gray-400">{place.rating} / 5</span>
      </div>
    </div>
  );
}
Place.propTypes = {
    place: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  };
export default Place;
