import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FeedPage from '../../components/Feed/FeedPage/FeedPage';
import styles from './Feed.module.css';

function Feed() {
  const [initialPosts, setInitialPosts] = useState([
    // Mock data for initial posts
    {
      id: 1,
      user: 'Alice',
      userAvatar: '/assets/images/alice-avatar.jpg',
      title: 'Exploring the Local Park',
      description: 'Had a wonderful time hiking in the local park today!',
      image: '/assets/images/park.jpg',
      timestamp: 'September 20, 2024, 10:00 AM',
      likes: 10,
      comments: [
        {
          id: 1,
          user: 'Bob',
          text: 'Sounds fun! Which park did you visit?',
        },
      ],
      category: 'Local',
    },
    {
      id: 2,
      user: 'Charlie',
      userAvatar: '/assets/images/charlie-avatar.jpg',
      title: 'Global Art Exhibition',
      description: 'Don\'t miss the annual global art exhibition happening this weekend.',
      image: '/assets/images/art-exhibition.jpg',
      timestamp: 'September 19, 2024, 3:30 PM',
      likes: 25,
      comments: [],
      category: 'Global',
    },
    // Add more mock posts as needed
  ]);

  return (
    <div className={styles.feedPage}>
      <Header />
      <main className={styles.mainContent}>
        <FeedPage initialPosts={initialPosts} />
      </main>
      <Footer />
    </div>
  );
}

export default Feed;
