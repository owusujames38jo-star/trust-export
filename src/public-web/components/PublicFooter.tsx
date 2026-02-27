import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsShieldLock } from "react-icons/bs";

export const PublicFooter = () => {
  return (
    <Footer container className="!bg-[#111827] border-t border-gray-800 rounded-none mt-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Brand & Mission */}
          <div className="mb-8 sm:mb-0">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black font-black text-xs italic">T</span>
               </div>
               <span className="text-xl font-bold text-white tracking-tight">TrustAuto</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Securing the world's vehicle marketplace through automated escrow, 
              verified inspections, and global logistics.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Services" className="text-white opacity-50" />
              <Footer.LinkGroup col className="text-gray-400">
                <Footer.Link href="#">Escrow Process</Footer.Link>
                <Footer.Link href="#">Logistics & Shipping</Footer.Link>
                <Footer.Link href="#">Inspection Queue</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white opacity-50" />
              <Footer.LinkGroup col className="text-gray-400">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms of Trade</Footer.Link>
                <Footer.Link href="#">Escrow Agreement</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Security" className="text-white opacity-50" />
              <div className="flex items-center gap-2 text-blue-500 text-sm font-bold border border-blue-900/50 bg-blue-900/10 p-2 rounded">
                <BsShieldLock />
                256-bit SSL Secure
              </div>
            </div>
          </div>
        </div>

        <Footer.Divider className="border-gray-800" />
        
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="TrustAuto™" year={2026} className="text-gray-500" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-500 hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-500 hover:text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-500 hover:text-white" />
            <Footer.Icon href="#" icon={BsGithub} className="text-gray-500 hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
};