// src/pages/NotFoundPage/NotFoundPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import '../../index.css';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.notFoundSection} section`}>
      <motion.div
        className={`${styles.notFoundContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className={styles.messageContainer}>
          <h1 className={styles.title}>404 - Page Not Found</h1>
          <p className={styles.subtitle}>
            The page you are looking for doesn't exist.
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonHome} onClick={() => navigate('/')}>
              Go to Home Page
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
