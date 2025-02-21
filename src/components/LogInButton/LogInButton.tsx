import React from 'react';
import styles from './LoginButton.module.css';
import { useNavigate } from 'react-router-dom';

export const LogInButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.buttonLogIn} onClick={() => navigate('/login')}>
      I already have an account
    </button>
  );
};
