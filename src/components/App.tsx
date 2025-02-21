// src/components/App.tsx

import { HomePage } from '../pages/HomePage/HomePage';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import { SignUpPage } from '../pages/SignUpPage/SignUpPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import './App.module.css';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
