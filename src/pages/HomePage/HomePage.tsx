// src/pages/HomePage/HomePage.tsx

import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';
import '../../index.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.homeSection} section`}>
      <div className={`${styles.homeContainer} container`}>
        <div className={styles.firstSide}>
          <blockquote className={styles.quoteBox}>
            <span className={styles.textBlack}>THE SECRET OF </span>
            <span className={styles.textUnderline}>GETTING AHEAD </span>
            <span className={styles.textBlack}>IS GETTING </span>
            <span className={styles.textUnderlineLarge}>STARTED</span>
          </blockquote>
        </div>

        <div className={styles.secondSide}>
          <h1 className={styles.title}>Road to the Dream 71</h1>
          <p className={styles.subtitle}>
            Transform your life in 71 days through discipline and dedication
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonLogIn}
              onClick={() => navigate('/login')}
            >
              I already have an account
            </button>
            <button
              className={styles.buttonSignUp}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
