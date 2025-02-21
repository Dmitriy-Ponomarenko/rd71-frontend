// src/pages/HomePage/HomePage.tsx

import React from 'react';
import styles from './HomePage.module.css';
import '../../index.css';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';
import { HomeSection } from '../../components/HomeSection/HomeSection';

export const HomePage: React.FC = () => {
  return (
    <div className={`${styles.homeSection} section`}>
      <div className={`${styles.homeContainer} container`}>
        <QuoteSection />
        <HomeSection />
      </div>
    </div>
  );
};
