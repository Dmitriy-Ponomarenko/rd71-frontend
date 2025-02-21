import React from 'react';
import { motion } from 'framer-motion';
import styles from './SignUpPage.module.css';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';

export const SignUpPage: React.FC = () => {
  return (
    <div className={`${styles.signUpPageSection} section`}>
      <motion.div
        className={`${styles.signUpPageContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SignUpForm />
        <QuoteSection />
      </motion.div>
    </div>
  );
};
