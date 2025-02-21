import React from 'react';
import styles from './QuoteSection.module.css';

export const QuoteSection: React.FC = () => {
  return (
    <div className={styles.firstSide}>
      <blockquote className={styles.quoteBox}>
        <span className={styles.textBlack}>THE SECRET OF </span>
        <span className={styles.textUnderline}>GETTING AHEAD </span>
        <span className={styles.textBlackLarge}>IS GETTING </span>
        <span className={styles.textUnderlineLarge}>STARTED</span>
      </blockquote>
    </div>
  );
};
