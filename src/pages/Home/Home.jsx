import React from 'react';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
