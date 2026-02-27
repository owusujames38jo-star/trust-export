import React, { useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Flowbite } from "flowbite-react";
import NavbarSidebarLayout from "./flowbite-dash/layouts/navbar-sidebar";
import DashboardPage from './flowbite-dash/pages/index';
import SignInPage from "./flowbite-dash/pages/authentication/sign-in"; 
import UserProfile from './flowbite-dash/pages/profile';
import SettingsPage from './flowbite-dash/pages/settings';
import SupportPage from './flowbite-dash/pages/support';
import NotificationsPage from "./flowbite-dash/pages/notifications";
import LogisticsExportPage from './flowbite-dash/pages/logistics-export';
import PartnersPage from './flowbite-dash/pages/partners';
import VaultPage from './flowbite-dash/pages/VaultPage';
import SellerPinPortal from './flowbite-dash/pages/seller-portal'; 
import { B13AExports } from './flowbite-dash/components/B13AExports';
import { InspectionQueue, VINIntakePage } from './flowbite-dash/components/VINIntake';
import { PublicWebRoutes } from "./public-web/PublicRoutes";
import PublicLayout from './public-web/layouts/PublicLayout';
import LandingPage from './public-web/pages/LandingPage';



// 1. The Bouncer (Logic for guarding routes)
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication/sign-in" replace />;
};

function App() {
  // 2. Theme Management
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Flowbite>
      <Routes>
        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify" element={<SellerPinPortal />} /> 
          <Route path="/authentication/sign-in" element={<SignInPage />} />
        </Route>

        {/* PROTECTED ROUTES */}
        <Route element={<ProtectedRoute />}>
          
          {/* SIDEBAR LAYOUT (Wrapped group) */}
          <Route element={<NavbarSidebarLayout />}>
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/intake" element={<VINIntakePage />} />
            <Route path="/inspections" element={<InspectionQueue />} />
            <Route path="/customs" element={<B13AExports />} />
            <Route path="/logistics-export" element={<LogisticsExportPage />} />
            <Route path="/vault" element={<VaultPage />} />
            <Route path="/partners" element={<PartnersPage />} />
          </Route>

          {/* NO SIDEBAR (Full screen protected) */}
          
          
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Flowbite>
  );
}

// 🚀 THE CRITICAL MISSING PIECE:
export default App;