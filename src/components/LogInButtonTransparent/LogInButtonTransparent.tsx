import React from 'react';
import styles from './LogInButtonTransparent.module.css';
import { useNavigate } from 'react-router-dom';

export const LogInButtonTransparent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.buttonLogIn} onClick={() => navigate('/login')}>
      Log In
    </button>
  );
};

export default LogInButtonTransparent;
