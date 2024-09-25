// src/pages/Places.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

function Places() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Sakura Park',
      location: 'Tokyo, Japan',
      description: 'A beautiful park known for its cherry blossoms.',
      reviews: [
        { id: 1, user: 'Alice', rating: 5, comment: 'Absolutely loved the cherry blossoms!' },
        { id: 2, user: 'Bob', rating: 4, comment: 'Great place to relax and enjoy nature.' },
      ],
    },
    {
      id: 2,
      name: 'Shibuya Crossing',
      location: 'Tokyo, Japan',
      description: 'Famous intersection known for its bustling crowds.',
      reviews: [
        { id: 1, user: 'Charlie', rating: 5, comment: 'An iconic spot with amazing energy!' },
      ],
    },
    // Add more recommended places as needed
  ]);

  const [newReview, setNewReview] = useState({
    placeId: null,
    user: '',
    rating: 5,
    comment: '',
  });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const { placeId, user, rating, comment } = newReview;
    if (!placeId || !user || !comment) {
      alert('Please fill in all fields.');
      return;
    }

    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === parseInt(placeId)
          ? {
              ...place,
              reviews: [
                ...place.reviews,
                { id: place.reviews.length + 1, user, rating: parseInt(rating), comment },
              ],
            }
          : place
      )
    );

    setNewReview({
      placeId: null,
      user: '',
      rating: 5,
      comment: '',
    });
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Recommended Places</h1>
      <div className="space-y-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      {/* Review Form */}
      <div className="mt-8 bg-darkCard p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Select Place</label>
            <select
              name="placeId"
              value={newReview.placeId || ''}
              onChange={(e) => setNewReview((prev) => ({ ...prev, placeId: e.target.value }))}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                -- Select a Place --
              </option>
              {places.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name} - {place.location}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="user"
              value={newReview.user}
              onChange={handleReviewChange}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Rating</label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {star} {star === 1 ? 'Star' : 'Stars'}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Comment</label>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
              className="w-full bg-gray-800 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <FaStar />
            <span>Submit Review</span>
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

const PlaceCard = ({ place }) => {
  const averageRating =
    place.reviews.reduce((acc, review) => acc + review.rating, 0) / place.reviews.length;

  return (
    <div className="bg-darkCard text-white p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
      <p className="text-gray-400 mb-4">{place.location}</p>
      <p className="mb-4">{place.description}</p>
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-400 mr-1" />
        <span>{averageRating.toFixed(1)} / 5</span>
        <span className="text-gray-400 ml-2">({place.reviews.length} reviews)</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Recent Reviews</h3>
        {place.reviews.slice(-3).map((review) => (
          <div key={review.id} className="mb-2">
            <strong>{review.user}:</strong> {review.comment} <span className="text-gray-400">({review.rating} ⭐)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Places;
