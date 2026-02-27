import { FC } from 'react';
import NavbarSidebarLayout from "../layouts/navbar-sidebar";
import { EscrowVault } from "../components/EscrowVault"; 
import { LogisticsCalculator } from "../components/LogisticsCalculator";

const VaultPage: FC = () => {
  return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white text-gray-900">
          Escrow & Financial Control
        </h1>
        
        {/* This creates a 2-column layout on large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Column 1: The Calculator (Takes 1 part of the grid) */}
          <div className="xl:col-span-1">
            <LogisticsCalculator />
          </div>

          {/* Column 2: The Ledger Table (Takes 2 parts of the grid) */}
          <div className="xl:col-span-2">
            <EscrowVault />
          </div>

        </div>
      </div>
  );
};

export default VaultPage;