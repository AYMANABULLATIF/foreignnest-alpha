import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Welcome to ForeignNest</h1>
        <p>Your gateway to connecting communities worldwide.</p>
        <a href="/signup" className={styles.ctaButton}>Get Started</a>
      </div>
      <div className={styles.imageContainer}>
        <img src="/assets/images/hero-image.png" alt="Community Illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
