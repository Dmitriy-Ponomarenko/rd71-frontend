import React from 'react';
import styles from './HomeSection.module.css';
import { LogInButton } from '../LogInButton/LogInButton';
import { SignUpButton } from '../SignUpButton/SignUpButton';

export const HomeSection: React.FC = () => {
  return (
    <div className={styles.secondSide}>
      <h1 className={styles.title}>Road to the Dream 71</h1>
      <p className={styles.subtitle}>
        Transform your life in 71 days through discipline and dedication
      </p>
      <div className={styles.buttonContainer}>
        <LogInButton />
        <SignUpButton />
      </div>
    </div>
  );
};
