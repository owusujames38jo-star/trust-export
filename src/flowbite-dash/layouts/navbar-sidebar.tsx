import { Footer } from "flowbite-react";
import React, { useState, type FC } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { MdFacebook } from "react-icons/md";
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import NewExportModal from "../components/NewExportModal";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
}

// 1. Define the props that MainContent needs
interface MainContentProps extends NavbarSidebarLayoutProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const NavbarSidebarLayout: FC<NavbarSidebarLayoutProps> = function ({ isFooter = true }) {
  // 🚀 MOVE STATE HERE: This is the "brain" for both the Navbar and the Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="fixed z-30 w-full">
        {/* ✅ Navbar now successfully tells the parent to open the modal */}
        <Navbar onNewExport={() => setIsModalOpen(true)} />
      </div>
      
      <div className="flex pt-16 overflow-x-hidden">
        <aside className="fixed top-0 left-0 z-20 hidden w-64 h-full pt-16 lg:flex flex-col border-r border-gray-200 dark:border-gray-700">
          <Sidebar />
        </aside>

        <div className="relative w-full h-full min-h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 lg:ml-64">
          {/* ✅ Pass the state down to the content area */}
          <MainContent 
            isFooter={isFooter} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
          />
        </div>
      </div>
    </div>
  );
};

const MainContent: FC<MainContentProps> = function ({
  isFooter,
  isModalOpen,
  setIsModalOpen,
}) {
  return (
    <main className="px-4 pt-6">
      <Outlet /> 
      
      {/* ✅ The Modal now lives here and listens to the state */}
      <NewExportModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {isFooter && <MainContentFooter />}
    </main>
  );
};

const MainContentFooter: FC = function () {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-4">
      <div className="mx-auto max-w-screen-xl text-center">
        <Footer.LinkGroup className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">Terms and conditions</Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Footer.Link>
          <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">Cookie Policy</Footer.Link>
          <Footer.Link href="#" className="hover:underline">Contact</Footer.Link>
        </Footer.LinkGroup>
        <div className="flex justify-center space-x-6">
           <MdFacebook className="text-xl" />
           <FaInstagram className="text-xl" />
           <FaTwitter className="text-xl" />
           <FaGithub className="text-xl" />
        </div>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          &copy; 2026 TrustExport. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default NavbarSidebarLayout;