import React from 'react';
import styles from './LogInForm.module.css';
import { SignUpButton } from '../SignUpButton/SignUpButton';

export const LogInForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <form className={styles.logInForm} onSubmit={handleSubmit}>
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
      <button type="submit" className={styles.submitButton}>
        Log In
      </button>
      <div>
        <p>I need a new account:</p>
        <SignUpButton />
      </div>
    </form>
  );
};
