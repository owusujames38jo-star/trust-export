import React from 'react';
import { Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import LandingPage from './pages/LandingPage';

// This is the "Smart" way—we group the public side into one variable
export const PublicWebRoutes = (
  <Route element={<PublicLayout />}>
    <Route path="/" element={<LandingPage />} />
  </Route>
);