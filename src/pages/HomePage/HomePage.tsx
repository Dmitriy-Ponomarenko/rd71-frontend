// src/pages/HomePage/HomePage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomePage.module.css';
import '../../index.css';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';
import { HomeSection } from '../../components/HomeSection/HomeSection';

export const HomePage: React.FC = () => {
  return (
<div className={`${styles.homeSection} section`}>
      <motion.div
        className={`${styles.homeContainer} container`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <QuoteSection />
        <HomeSection />
      </motion.div>
    </div>
  );
};
