// src/redux/auth/operations.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/auth';

interface AuthResponse {
  user: { id: string; email: string };
  accessToken: string;
}

interface AuthError {
  message: string;
}

export const register = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: AuthError }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/register', credentials, {
      withCredentials: true,
    });
    return data.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || 'Registration failed',
      });
    }
    return thunkAPI.rejectWithValue({
      message: 'An unknown error occurred',
    });
  }
});

export const login = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: AuthError }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/login', credentials, {
      withCredentials: true,
    });
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || 'Login failed',
      });
    }
    return thunkAPI.rejectWithValue({
      message: 'An unknown error occurred',
    });
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout', {}, { withCredentials: true });
    return {};
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || 'Logout failed',
      });
    }
    return thunkAPI.rejectWithValue({
      message: 'An unknown error occurred',
    });
  }
});
