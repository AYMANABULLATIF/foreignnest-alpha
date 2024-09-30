// src/pages/Places.jsx

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FaPlus, FaSearch } from 'react-icons/fa';
import Place from '../components/Place';
import Modal from '../components/Modal';

function Places() {
  const [places, setPlaces] = useState([
    {
      id: 1,
      name: 'Shibuya Crossing',
      description: 'Famous intersection in Tokyo known for its bustling pedestrian traffic.',
      location: 'Shibuya, Tokyo',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Dotonbori',
      description: 'Popular tourist destination in Osaka with vibrant nightlife.',
      location: 'Dotonbori, Osaka',
      rating: 4.7,
    },
    // Add more places as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPlace, setNewPlace] = useState({
    name: '',
    description: '',
    location: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlace((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPlace = (e) => {
    e.preventDefault();
    if (!newPlace.name || !newPlace.description || !newPlace.location || !newPlace.rating) {
      alert('Please fill in all fields.');
      return;
    }
    const place = {
      id: places.length + 1,
      ...newPlace,
      rating: parseFloat(newPlace.rating),
    };
    setPlaces([...places, place]);
    setNewPlace({ name: '', description: '', location: '', rating: '' });
    setIsModalOpen(false);
  };

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Places</h1>
        <p className="text-gray-300 mb-6">
          Discover and share places of interest in Japan.
        </p>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Places..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary hover:bg-blue-500 text-white p-3 rounded-lg">
              <FaSearch />
            </button>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-success hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
          >
            <FaPlus />
            <span>Add Place</span>
          </button>
        </div>
        <div className="space-y-6">
          {filteredPlaces.map((place) => (
            <Place key={place.id} place={place} />
          ))}
          {filteredPlaces.length === 0 && (
            <p className="text-gray-300 text-center">No places found.</p>
          )}
        </div>
      </div>

      {/* Add Place Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-darkCard p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Add New Place</h2>
          <form onSubmit={handleAddPlace} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Place Name</label>
              <input
                type="text"
                name="name"
                value={newPlace.name}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={newPlace.description}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={newPlace.location}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                value={newPlace.rating}
                onChange={handleChange}
                min="1"
                max="5"
                step="0.1"
                className="w-full bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-success hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <FaPlus />
                <span>Add Place</span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </MainLayout>
  );
}

export default Places;
