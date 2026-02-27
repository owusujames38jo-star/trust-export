import { useState, type FC } from "react";
import { Button, DarkThemeToggle, Navbar, TextInput, Dropdown } from "flowbite-react";
import { HiSearch, HiBell, HiUser, HiCog, HiLogout,HiTruck } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";



interface NavbarProps {
  onNewExport?: () => void;
}
  const ExampleNavbar: FC<NavbarProps> = function ({ onNewExport }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // 3. Define the search action
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      // Logic: If it looks like a VIN (17 chars), go to logistics
      if (searchTerm.length === 17) {
        navigate(`/logistics-export?search=${searchTerm}`);
      } else {
        // Otherwise, go to a general search results page
        navigate(`/search-results?query=${searchTerm}`);
      }
    }
  };
  

  return (

   <> 
    
    <Navbar fluid className="fixed z-[1001] w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full py-3 px-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Keeping the brand here, but making it match your sidebar style */}
                    {/* BRANDING LOGO SECTION */}
                    <div className="mb-6 px-6 flex items-center gap-3">
                      <div className="bg-blue-600 p-2 rounded-lg shrink-0 shadow-md">
                        <HiTruck className="text-white text-xl" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-gray-900 dark:text-white leading-none uppercase tracking-tight">
                          Trust<span className="text-blue-600">Export</span>
                        </span>
                        <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Secure Logistics</span>
                      </div>
                    </div>

            <div className="relative ml-4 hidden md:block">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm} // 4. Connect the value
                onChange={(e) => setSearchTerm(e.target.value)} // 5. Update state
                onKeyDown={handleSearch} // 6. Listen for 'Enter' key
                className="block w-64 rounded-lg border border-gray-300 bg-gray-50 p-1.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 xl:w-96"
                placeholder="Search VIN (17 chars) or Buyer..."
              />
            </div>
          </div>  

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 sm:gap-3">

              {/* Notification bell - essential for export status updates */}


           <Dropdown
              arrowIcon={false}
              inline
              label={
                /* Wrapper with relative positioning for the red dot */
                <div className="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 cursor-pointer">
                  <HiBell className="h-6 w-6" />
                  {/* Notification Dot */}
                  <span className="absolute top-2 right-2.5 block h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500 dark:border-gray-800"></span>
                </div>
              }
            >
              <Dropdown.Header>
                <span className="block text-center text-sm font-bold text-gray-900 dark:text-white">Notifications</span>
              </Dropdown.Header>

              {/* Notification Item 1 */}
              <Dropdown.Item 
                className="flex flex-col items-start gap-1 py-3 px-4 border-b border-gray-100 dark:border-gray-700 min-w-[280px]"
                onClick={() => navigate("/logistics-export")} // Lead to the relevant page
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold uppercase text-blue-600">Logistics</span>
                  <span className="text-[10px] text-gray-400">2 min ago</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Vehicle Picked Up</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-left">VIN: 1HGCM82... is in transit.</p>
              </Dropdown.Item>

              {/* Notification Item 2 */}
              <Dropdown.Item 
                className="flex flex-col items-start gap-1 py-3 px-4 border-b border-gray-100 dark:border-gray-700"
                onClick={() => navigate("/vault")}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold uppercase text-yellow-500">Escrow</span>
                  <span className="text-[10px] text-gray-400">1 hour ago</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Payment Verified</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-left">Funds released for Zaid Motors.</p>
              </Dropdown.Item>

              {/* Footer Link */}
              <Dropdown.Item 
                onClick={() => navigate("/notifications")}
                className="justify-center py-2 text-sm font-medium text-blue-600 hover:underline hover:bg-transparent"
              >
                View all notifications
              </Dropdown.Item>
            </Dropdown>

              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const isDark = document.documentElement.classList.toggle('dark');
                    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
                  }}
                  className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  {/* This icon changes based on mode */}
                  <svg className="hidden dark:block h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
                  <svg className="block dark:hidden h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                </button>
                
                <div className="flex items-center gap-3">
              <Dropdown
              arrowIcon={false}
              inline
              label={
                /* 🚀 We wrap the avatar in a div and give it a high z-index here */
                <div className="relative z-[1002]"> 
                  <img 
                    className="h-8 w-8 rounded-full border border-gray-300 shadow-sm cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all" 
                    src="https://ui-avatars.com/api/?name=Admin" 
                    alt="user" 
                  />
                </div>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm font-bold text-gray-900 dark:text-white">Admin User</span>
                <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">admin@trustauto.com</span>
              </Dropdown.Header>

              {/* 🚀 Use the 'onClick' with 'navigate' to avoid the Link/Item nesting issues */}
              <Dropdown.Item icon={HiUser} onClick={() => navigate("/profile")}>
                My Profile
              </Dropdown.Item>

              <Dropdown.Item icon={HiCog} onClick={() => navigate("/settings")}>
                Account Settings
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item 
                icon={HiLogout} 
                className="text-red-600" 
                onClick={() => {
                  localStorage.removeItem("isAuthenticated");
                  navigate("/authentication/sign-in");
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>

            <Button color="blue" onClick={onNewExport}>
              New Export
            </Button>
          </div>

            </div>
          
          </div>
        </div>
          </div>
        </div>
              </Navbar>

              </>

            );
          };

export default ExampleNavbar;