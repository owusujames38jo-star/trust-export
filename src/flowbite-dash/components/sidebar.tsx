/* eslint-disable jsx-a11y/anchor-is-valid */
import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiChartPie,
  HiClipboardCheck,
  HiLibrary,
  HiLockClosed,
  HiSearch,
  HiTruck,
  HiUserGroup,
  HiIdentification,
  HiQuestionMarkCircle,
  HiCog,
  HiLogout,
  HiLogin,
  HiViewBoards,
  HiTable,
  HiAdjustments
} from "react-icons/hi";

const ExampleSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, []);

  return (
    // We remove the internal Flowbite width to let our Layout handle it
    <Sidebar aria-label="Trust Export Sidebar" className="h-full border-none">
      <div className="flex h-full flex-col pt-20"> {/* pt-20 pushes everything below the Navbar */}
        <div className="px-3">
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search VIN..."
              required
            />
          </form>
        </div>

        <Sidebar.Items>
          {/* GROUP 1: MAIN OPERATIONS */}
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin"
              icon={HiChartPie}
              className={`text-sm ${currentPage === "/admin" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
            >
              Overview
            </Sidebar.Item>

            <Sidebar.Item
              href="/intake"
              icon={HiIdentification}
              className={currentPage.includes("vin") ? "bg-gray-100 dark:bg-gray-700" : ""}
            >
              VIN Intake Queue
            </Sidebar.Item>

            <Sidebar.Item
              href="/inspections"
              icon={HiClipboardCheck}
              className={currentPage.includes("inspection") ? "bg-gray-100 dark:bg-gray-700" : ""}
            >
              Inspection Queue
            </Sidebar.Item>

            <Sidebar.Item
              href="/vault"
              icon={HiLockClosed}
              className={currentPage.includes("escrow") ? "bg-gray-100 dark:bg-gray-700" : ""}
            >
              Escrow Vault
            </Sidebar.Item>

            <Sidebar.Item
              href="/logistics-export"
              icon={HiTruck}
              className={currentPage.includes("shipping") ? "bg-gray-100 dark:bg-gray-700" : ""}
            >
              Logistics & Export
            </Sidebar.Item>

            <Sidebar.Item as={Link} to="/partners" icon={HiUserGroup}>
              Inspectors & Carriers
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          {/* GROUP 2: COMPLIANCE & HELP */}
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/customs" icon={HiLibrary}>
              B13A Documents
            </Sidebar.Item>

            <Sidebar.Item 
              href="/support" 
              icon={HiQuestionMarkCircle}>
              Support Center
            </Sidebar.Item>
          </Sidebar.ItemGroup>

          {/* GROUP 3: SYSTEM & ACCOUNT */}
          <Sidebar.ItemGroup>
           <Sidebar.Item 
            href="/settings" 
            icon={HiAdjustments}
            className="hover:bg-blue-50"
          >
            Settings
          </Sidebar.Item>

            <Sidebar.Item href="#"
               // Ensure HiLogout is imported from react-icons/hi
              className="cursor-pointer text-red-600 hover:bg-red-50"
              onClick={() => {
                // 1. "Burn" the key so the Bouncer won't let you back in without a password
                localStorage.removeItem("isAuthenticated");
                
                // 2. Clear any other session data if you have it
                localStorage.clear(); 

                // 3. Force the app to jump back to the Sign-In page
                // We use window.location.href here to ensure a full "fresh" reset
                window.location.href = "/authentication/sign-in";
              }}>

              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;