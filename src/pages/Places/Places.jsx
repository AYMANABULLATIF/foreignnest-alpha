import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PlaceList from '../../components/Places/PlaceList/PlaceList';
import PlaceDetails from '../../components/Places/PlaceDetails/PlaceDetails';
import SearchBar from '../../components/Places/SearchBar/SearchBar';
import FilterOptions from '../../components/Places/FilterOptions/FilterOptions';
import styles from './Places.module.css';

function Places() {
  const { id } = useParams(); // To handle PlaceDetails route
  const [places, setPlaces] = useState([
    // Initial mock data
    {
      id: 1,
      name: 'Central Park',
      category: 'Park',
      description: 'A large public park in New York City.',
      image: '/assets/images/central-park.jpg',
      location: 'New York, NY',
    },
    {
      id: 2,
      name: 'Eiffel Tower',
      category: 'Monument',
      description: 'An iconic landmark in Paris, France.',
      image: '/assets/images/eiffel-tower.jpg',
      location: 'Paris, France',
    },
    {
      id: 3,
      name: 'Great Wall of China',
      category: 'Historical Site',
      description: 'A historic fortification in China.',
      image: '/assets/images/great-wall.jpg',
      location: 'China',
    },
    // Add more places as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(places.map((place) => place.category))];

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredPlaces = places.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? place.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const placeToDisplay = id
    ? places.find((place) => place.id === parseInt(id, 10))
    : null;

  return (
    <div className={styles.placesPage}>
      <Header />
      <main className={styles.mainContent}>
        {placeToDisplay ? (
          <PlaceDetails place={placeToDisplay} />
        ) : (
          <>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <FilterOptions
              categories={categories}
              selectedCategory={selectedCategory}
              onFilterChange={handleFilterChange}
            />
            <PlaceList places={filteredPlaces} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Places;
