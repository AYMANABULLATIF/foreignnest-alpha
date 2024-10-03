import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'Community Leader',
      feedback: 'ForeignNest has revolutionized the way our community connects and grows.',
      avatar: '/assets/images/jane-avatar.jpg',
    },
    {
      name: 'John Smith',
      role: 'Developer',
      feedback: 'The platform is intuitive and highly customizable to our needs.',
      avatar: '/assets/images/john-avatar.jpg',
    },
    {
      name: 'Emily Johnson',
      role: 'Content Creator',
      feedback: 'I love how easy it is to share my stories and engage with my audience.',
      avatar: '/assets/images/emily-avatar.jpg',
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <img src={testimonial.avatar} alt={`${testimonial.name} Avatar`} className={styles.avatar} />
            <h3>{testimonial.name}</h3>
            <p className={styles.role}>{testimonial.role}</p>
            <p className={styles.feedback}>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
