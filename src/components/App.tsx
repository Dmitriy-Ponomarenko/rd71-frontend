// src/components/App.tsx

import { HomePage } from '../pages/HomePage/HomePage';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { SettingsPage } from '../pages/SettingsPage/SettingsPage';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/user/:id" element={<HomePage />} />
      <Route path="/user/settings" element={<SettingsPage />} />
    </Routes>
  );
};
