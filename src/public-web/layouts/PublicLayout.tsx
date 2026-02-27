import React from "react";
import { Outlet } from "react-router-dom";
import { PublicNavbar } from "../components/PublicNavbar";
import bgImage from '../../assets/public-background.png';
import { PublicFooter } from "../components/PublicFooter";


const PublicLayout = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 bg-white dark:bg-[#0F172A] transition-colors duration-500">
        
        {/* This div only appears in Dark Mode */}
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950"></div>
        
        {/* Subtle grid that works in both, but is faint */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* 2. THE CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center">
        <PublicNavbar />
        
        <main className="flex-grow w-full flex flex-col relative pt-32"> 
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        
        <PublicFooter />
        </div>
      </div>
    
  );
}

export default PublicLayout;