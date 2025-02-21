import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import { LogInButton } from '../LogInButton/LogInButton';

export const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      'Email:',
      email,
      'Password:',
      password,
      'Confirm Password:',
      confirmPassword
    );
  };

  return (
    <form className={styles.signUpForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
      <LogInButton />
    </form>
  );
};

export default SignUpForm;
