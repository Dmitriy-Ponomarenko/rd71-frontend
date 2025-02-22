import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './LogInForm.module.css';
import { SignUpButton } from '../SignUpButton/SignUpButton';

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
});

export const LogInForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
          <h1 className={styles.title}>Log-In</h1>
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
              </div>
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
            </div>
            <NavLink to="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </NavLink>
          </div>

          <button type="submit" className={styles.signInBtn}>
            Log In
          </button>

          <div className={styles.signUpOffer}>
            <p className={styles.signuUpOfferText}>You need a new account?</p>
            <SignUpButton />
          </div>
        </form>
      </div>
    </div>
  );
};
