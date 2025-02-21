import React from 'react';
import styles from './SignUpButton.module.css';
import { useNavigate } from 'react-router-dom';

export const SignUpButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.buttonSignUp} onClick={() => navigate('/signup')}>
      Sign Up
    </button>
  );
};
