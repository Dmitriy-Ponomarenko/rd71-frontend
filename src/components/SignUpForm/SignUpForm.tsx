import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './SignUpForm.module.css';
import { LogInButtonTransparent } from '../LogInButtonTransparent/LogInButtonTransparent';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const SignUpForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
  }

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    console.log('Email:', email, 'Password:', password);
    reset();
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.formContainer}>
        <form
          className={styles.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={styles.title}>Sign-Up</h1>
          <div className={styles.inputBox}>
            <div className={styles.group}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className={`${styles.input} ${
                  errors.email ? styles.error : ''
                }`}
                {...register('email')}
                autoComplete="email"
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.wrapPass}>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  className={`${styles.input} ${
                    errors.password ? styles.error : ''
                  }`}
                  {...register('password')}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </div>
            </div>

            <div className={styles.group}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.wrapPass}>
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className={`${styles.input} ${
                    errors.confirmPassword ? styles.error : ''
                  }`}
                  {...register('confirmPassword')}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
                {errors.confirmPassword && (
                  <p className={styles.error}>{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className={styles.signUpBtn}>
            Sign Up
          </button>

          <div className={styles.signUpOffer}>
            <p className={styles.signUpOfferText}>Do you already have an account?</p>
              <LogInButtonTransparent />
          </div>
        </form>
      </div>
    </div>
  );
};
