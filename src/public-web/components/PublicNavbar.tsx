import React from "react";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import { HiUserCircle, HiBell } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

// 1. Define the helper component FIRST to avoid "Hoisting" errors
const NavPill = ({ children, to, active = false }: { children: React.ReactNode; to: string; active?: boolean }) => (
  <Link
    to={to}
    className={`px-6 py-2 rounded-full text-lg md:text-sm font-bold transition-all duration-200 whitespace-nowrap flex items-center justify-center ${
      active 
    }`}
  >
    {children}
  </Link>
);

export const PublicNavbar = () => {
  const location = useLocation();

  return (
    <Navbar fluid className="fixed top-0 left-0 w-full z-[999] !bg-[#191F29] border-b border-gray-800 py-3 transition-none"
>
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">

        {/* Brand Logo */}
    <Link to="/" className="flex items-center gap-2">
      <div className="flex flex-col">
        {/* text-black for light mode, dark:text-white for dark mode */}
        <span className="text-2xl md:text-4xl font-bold text-white dark:text-white uppercase tracking-tight">
          Trust<span className="text-blue-600">Export</span>
        </span>
        <span className="text-[10px] md:text-[14px] font-medium text-gray-500 uppercase tracking-widest">
          Secure Logistics
        </span>
      </div>
    </Link>

        {/* Right Side Actions */}
        <div className="flex md:order-2 items-center gap-3">
          <div className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 hidden sm:block">
            <HiBell className="h-7 w-7" />
          </div>

          <Button pill className="!bg-blue-500 hover:!bg-blue-600 font-bold hidden sm:block">
            Login
          </Button>
          
          <HiUserCircle className="text-gray-400 w-10 h-10 cursor-pointer hover:text-white transition-colors hidden sm:block" />
          
          <Navbar.Toggle className="text-white hover:bg-gray-800" />
        </div>

        {/* Links Collapse */}
        <Navbar.Collapse>
          <div className=" text-white flex flex-col md:flex-row md:items-center gap-4 md:gap-5 mt-4 md:mt-0">

            <div className="!bg-[#30353F] rounded-md inline-block !rounded-full px-0 !inline-flex !py-1">
            <NavPill to="/" active={location.pathname === "/"}>
              Home
            </NavPill>
            </div>

            <div className="!bg-[#30353F] rounded-md inline-block !rounded-full px-0 !inline-flex !py-1">
            <NavPill to="/buyer" active={location.pathname === "/buyer"}>
              Buyer Portal
            </NavPill>
            </div>

            <div className="!bg-[#30353F] rounded-md inline-block !rounded-full px-0 !inline-flex !py-1">
            <NavPill to="/seller-portal" active={location.pathname === "/seller-portal"}>
              Seller Portal
            </NavPill>
            </div>

            <div className="!bg-[#30353F] rounded-md inline-block !rounded-full px-0 !inline-flex !py-1">
            <NavPill to="/inspector-portal" active={location.pathname === "/inspector-portal"}>
              Inspector Portal
            </NavPill>
            </div>

            <div className="!bg-[#30353F] rounded-md inline-block !rounded-full px-0 !inline-flex !py-1">
            <NavPill to="/services" active={location.pathname === "/services"}>
              Services
            </NavPill>
            </div>


            <DarkThemeToggle className="hover:bg-gray-100 dark:hover:bg-gray-800" />

          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
