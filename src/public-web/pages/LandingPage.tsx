import React from "react";
import { HeroSelection } from "../components/HeroSelection";
import { MarketplacePreview } from "../components/MarketplacePreview";
// import { Features } from "../components/Features"; <-- We'll make this next

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* SECTION 1: The Middle Section you requested (The Selection) */}
      <section className="min-h-[80vh] flex items-center justify-center">
        <HeroSelection />
      </section>

      <section className="" >
        <MarketplacePreview />
      </section>

      {/* SECTION 2: Trust Signals / Partners */}
      <section className="bg-gray-900/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/60 text-center
                            text-slate-900 dark:text-white tracking-tighter uppercase transition-colors duration-500">
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
           <span className="font-bold text-xl">CARFAX</span>
           <span className="font-bold text-xl">STRIPE</span>
           <span className="font-bold text-xl">FEDEX LOGISTICS</span>
           <span className="font-bold text-xl">ESCROW.COM</span>
        </div>
      </section>
      
      {/* Future sections like "How it Works" will go here */}
    </div>
  );
};

export default LandingPage;
