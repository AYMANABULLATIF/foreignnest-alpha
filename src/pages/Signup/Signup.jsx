import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from './Signup.module.css';

function Signup() {
  return (
    <div className={styles.signupPage}>
      <Header />
      <main className={styles.mainContent}>
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
}

export default Signup;
