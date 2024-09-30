// src/components/PlaceCard.jsx

import React from 'react';

function PlaceCard({ name, description, image }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-200 mb-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default PlaceCard;
