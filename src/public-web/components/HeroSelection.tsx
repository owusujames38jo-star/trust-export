import React from "react";
import { HiOutlineShoppingCart, HiOutlineKey, HiSearch } from "react-icons/hi";
import { FcInspection } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const HeroSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full relative flex flex-col items-center justify-start px-4 mt-10 animate-fade-in z-10 overflow-x-hidden">
      
      {/* --- THE FULL WIDTH BLUE ARC BACKGROUND --- */}
      <div className="mt-56 absolute top-0 left-0 w-full h-[70%] bg-blue-500/30 dark:bg-blue-900/20 backdrop-blur-md -z-10 [clip-path:ellipse(70%_100%_at_50%_0%)] border-b border-blue-200/30"></div>

      <div className="flex flex-col items-center w-full max-w-6xl">
        
        {/* 1. Main Headline */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
            One of Secure <br /> Vehicle Marketplace
          </h1>
          <p className="text-blue-600 dark:text-blue-400 font-bold tracking-[0.2em] uppercase text-xl mt-2 transition-colors duration-500">
            Escrow. Verified. Delivered.
          </p>
        </div>

        {/* 2. Selection Cards Row (IDENTICAL TO YOUR ORIGINAL) */}
        <div className="mt-40 flex flex-col md:flex-row items-stretch gap-6 w-full max-w-5xl relative mb-16">
          
          {/* BUYER CARD */}
          <div onClick={() => navigate('/')} className="group w-full md:w-1/2 cursor-pointer">
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/60 text-center">
              <HiOutlineShoppingCart className="text-6xl mx-auto mb-6 group-hover:scale-110 transition-transform text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500" />
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">Buy</h2>
              <p className="font-medium tracking-tight font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">
                START SECURE ACQUISITION <br /> & VERIFY SELLER
              </p>
            </div>
          </div>

          {/* INSPECTOR (Maintaining your md:-mt-100) */}
          <div onClick={() => navigate('/')} className="group w-full md:w-1/2 cursor-pointer md:-mt-30">
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/60 text-center">
              <FcInspection className="text-white text-6xl mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">INSPECT</h2>
              <p className="font-medium tracking-tight font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">
                Want to Register as an Inspector <br /> ENTER PORTAL & Sign Up/Sign In
              </p>
            </div>
          </div>

          {/* SELLER CARD */}
          <div onClick={() => navigate('/verify')} className="group w-full md:w-1/2 cursor-pointer">
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/60 text-center">
              <HiOutlineKey className="text-6xl mx-auto mb-6 group-hover:scale-110 transition-transform text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500" />
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">Sell</h2>
              <p className="font-medium tracking-tight font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">
                HAVE A PIN? <br /> ENTER PORTAL & SUBMIT DATA
              </p>
            </div>
          </div>

        </div>

        {/* 3. Global Search Explorer (Maintaining your sizing) */}
        <div className="w-full max-w-xl">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search Marketplace, VIN or Transaction ID..." 
              className="tracking-tight font-black w-full bg-gray-900/20 border border-white/10 rounded-full py-4 px-8 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all tracking-tighter transition-colors duration-500 shadow-xl"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-2.5 rounded-full text-white hover:bg-blue-500 cursor-pointer">
              <HiSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
