import React from 'react';
import { motion } from 'framer-motion';
import { LogInForm } from '../../components/LogInForm/LogInForm';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';
import styles from './LogInPage.module.css';
import '../../index.css';

export const LogInPage: React.FC = () => {
  return (
    <div className={`${styles.logInPageSection} section`}>
      <motion.div
        className={`${styles.logInPageContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <LogInForm />
        <QuoteSection />
      </motion.div>
    </div>
  );
};
