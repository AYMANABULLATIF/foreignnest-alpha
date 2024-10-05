import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import ProfileDetails from '../../components/Profile/ProfileDetails/ProfileDetails';
import EditProfileForm from '../../components/Profile/EditProfileForm/EditProfileForm';
import UserPosts from '../../components/Profile/UserPosts/UserPosts';
import FollowersList from '../../components/Profile/FollowersList/FollowersList';
import FollowingList from '../../components/Profile/FollowingList/FollowingList';
import styles from './Profile.module.css';

function Profile() {
  // Mock data for the profile
  const [profile, setProfile] = useState({
    name: 'John Doe',
    bio: 'Traveler | Blogger | Photographer',
    avatar: '/assets/images/john-avatar.jpg',
    coverPhoto: '/assets/images/profile-cover.jpg',
  });

  const [stats, setStats] = useState({
    postsCount: 5,
    followersCount: 120,
    followingCount: 75,
  });

  const [posts, setPosts] = useState([
    // Mock posts
    {
      id: 1,
      user: 'John Doe',
      userAvatar: '/assets/images/john-avatar.jpg',
      title: 'Sunset in Bali',
      description: 'Captured this beautiful sunset during my trip to Bali.',
      image: '/assets/images/bali-sunset.jpg',
      timestamp: 'September 18, 2024, 6:30 PM',
      likes: 25,
      comments: [
        {
          id: 1,
          user: 'Alice',
          text: 'Amazing view!',
        },
      ],
    },
    {
      id: 2,
      user: 'John Doe',
      userAvatar: '/assets/images/john-avatar.jpg',
      title: 'Exploring the Alps',
      description: 'Hiking through the stunning Alpine trails.',
      image: '/assets/images/alps-hike.jpg',
      timestamp: 'September 15, 2024, 9:00 AM',
      likes: 40,
      comments: [],
    },
    // Add more posts as needed
  ]);

  const [followers, setFollowers] = useState([
    // Mock followers
    {
      id: 1,
      name: 'Alice',
      avatar: '/assets/images/alice-avatar.jpg',
    },
    {
      id: 2,
      name: 'Bob',
      avatar: '/assets/images/bob-avatar.jpg',
    },
    // Add more followers as needed
  ]);

  const [following, setFollowing] = useState([
    // Mock following
    {
      id: 1,
      name: 'Charlie',
      avatar: '/assets/images/charlie-avatar.jpg',
    },
    {
      id: 2,
      name: 'Diana',
      avatar: '/assets/images/diana-avatar.jpg',
    },
    // Add more following as needed
  ]);

  const handleUpdateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <div className={styles.profilePage}>
      <Header />
      <Navbar />
      <main className={styles.mainContent}>
        <ProfileHeader
          coverPhoto={profile.coverPhoto}
          avatar={profile.avatar}
          name={profile.name}
          bio={profile.bio}
        />
        <ProfileDetails
          postsCount={stats.postsCount}
          followersCount={stats.followersCount}
          followingCount={stats.followingCount}
        />
        <EditProfileForm currentProfile={profile} onUpdateProfile={handleUpdateProfile} />
        <UserPosts posts={posts} />
        <FollowersList followers={followers} />
        <FollowingList following={following} />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
