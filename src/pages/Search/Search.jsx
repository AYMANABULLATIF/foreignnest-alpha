// src/pages/Search.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import CommunityCard from '../components/CommunityCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';

  // Placeholder for search results. Implement actual search logic as needed.
  const searchResults = [
    { id: 1, name: 'Syrians in Japan', description: 'A community for Syrians living in Japan.' },
    { id: 2, name: 'Americans Abroad', description: 'Connect with Americans living overseas.' },
    // Add more results based on the search term
  ];

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-6 text-center">Search Results for "{searchTerm}"</h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchResults.map((community) => (
            <CommunityCard
              key={community.id}
              name={community.name}
              description={community.description}
              isJoined={false} // Implement join state as needed
              onJoin={() => { /* Implement join functionality */ }}
              onLeave={() => { /* Implement leave functionality */ }}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-300 text-center">No results found.</p>
      )}
    </MainLayout>
  );
}

export default Search;
