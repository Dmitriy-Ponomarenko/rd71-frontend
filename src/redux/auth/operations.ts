// src/redux/auth/operations.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';

interface LoginResponse {
  user: { id: string; email: string };
}

interface LoginError {
  message: string;
}

export const login = createAsyncThunk<
  LoginResponse,
  { email: string; password: string },
  { rejectValue: LoginError }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/login', credentials);
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
    await axios.post('/logout');
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
