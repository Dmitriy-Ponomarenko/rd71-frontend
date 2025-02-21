import React from 'react';
import { LogInForm } from '../../components/LogInForm/LogInForm';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';
import styles from './LogInPage.module.css';
import '../../index.css';

export const LogInPage: React.FC = () => {
  return (
    <div className={`${styles.logInPageSection} section`}>
      <div className={`${styles.logInPageContainer} container`}>
        <LogInForm />
        <QuoteSection />
      </div>
    </div>
  );
};
