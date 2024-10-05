import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.loginPage}>
      <Header />
      <main className={styles.mainContent}>
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
