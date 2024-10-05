import React, { useContext, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import CommunityFeed from '../../components/Community/CommunityFeed/CommunityFeed';
import CreateCommunityPostForm from '../../components/Community/CreateCommunityPostForm/CreateCommunityPostForm';
import CommunitySidebar from '../../components/Community/CommunitySidebar/CommunitySidebar';
import { CommunityContext } from '../../context/CommunityContext';
import styles from './Community.module.css';



// ... rest of the code



function Community() {
  const { posts, categories, addCommunityPost } = useContext(CommunityContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on selected category and search term
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.communityPage}>
      <Header />
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.sidebar}>
          <CommunitySidebar
            categories={categories}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        <div className={styles.feedSection}>
          <CreateCommunityPostForm onCreatePost={addCommunityPost} />
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search community posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <CommunityFeed posts={filteredPosts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Community;
