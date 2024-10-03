import React from 'react';
import styles from './Features.module.css';

function Features() {
  const featureList = [
    {
      title: 'Connect with Others',
      description: 'Engage with communities that share your interests and passions.',
      icon: '/assets/images/connect-icon.png',
    },
    {
      title: 'Share Your Story',
      description: 'Create and share content that resonates with your community.',
      icon: '/assets/images/share-icon.png',
    },
    {
      title: 'Stay Informed',
      description: 'Receive updates and news tailored to your preferences.',
      icon: '/assets/images/inform-icon.png',
    },
  ];

  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.featureGrid}>
        {featureList.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <img src={feature.icon} alt={`${feature.title} Icon`} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
