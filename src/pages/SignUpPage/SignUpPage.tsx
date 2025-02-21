import React from 'react';
import styles from './SignUpPage.module.css';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { QuoteSection } from '../../components/QuoteSection/QuoteSection';

export const SignUpPage: React.FC = () => {
  return (
    <div className={`${styles.signUpPageSection} section`}>
      <div className={`${styles.signUpPageContainer} container`}>
        <SignUpForm />
        <QuoteSection />
      </div>
    </div>
  );
};
