import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FeedTabs from '../FeedTabs/FeedTabs';
import SearchBar from '../SearchBar/SearchBar';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import LocalFeed from '../LocalFeed/LocalFeed';
import GlobalFeed from '../GlobalFeed/GlobalFeed';
import styles from './FeedPage.module.css';

function FeedPage({ initialPosts }) {
  const [activeTab, setActiveTab] = useState('local');
  const [posts, setPosts] = useState(initialPosts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const localPosts = filteredPosts.filter((post) => post.category === 'Local');
  const globalPosts = filteredPosts.filter((post) => post.category === 'Global');

  return (
    <div className={styles.feedPage}>
      <CreatePostForm onCreatePost={handleCreatePost} />
      <FeedTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {activeTab === 'local' ? <LocalFeed localPosts={localPosts} /> : <GlobalFeed globalPosts={globalPosts} />}
    </div>
  );
}

FeedPage.propTypes = {
  initialPosts: PropTypes.array.isRequired,
};

export default FeedPage;
