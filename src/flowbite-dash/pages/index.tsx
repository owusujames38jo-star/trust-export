import { FC } from 'react';
import { useThemeMode, Badge, Dropdown, Table, Button  } from 'flowbite-react';
import Chart from "react-apexcharts";
import React, { useState } from 'react';
import InspectorLiveMap from './InspectorLiveMap';
import { EscrowVault } from '../components/EscrowVault';
import FraudAlertPanel from '../components/SecurityAlerts';
import { PinHandshakeMonitor, SecurityAuditLog } from '../components/SecurityCenter';
import { LogisticsCalculator } from '../components/LogisticsCalculator';
import { LatestTransactions, AcquisitionOverview } from '../components/Logistics';
import { VINIntakePage, InspectionQueue } from '../components/VINIntake';
import NewExportModal from '../components/NewExportModal';

// 1. Define the 'Shape' of a deal so the computer doesn't get confused
interface Deal {
  id: string;
  vin: string;
  status: 'pending' | 'inspected' | 'shipping';
}

const DashboardPage: FC = function () {
  const [currentStage, setCurrentStage] = useState<'inspecting' | 'pickup' | 'transit'>('inspecting');
  const [mode, setMode, toggleMode] = useThemeMode(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeDeal, setActiveDeal] = useState<Deal>({
    id: "TRX-99",
    vin: "1HGCM82...",
    status: 'pending'
  });

  return (
    
      <div className="px-4 pt-6 space-y-6">

        <div className="flex justify-end">
          <button onClick={() => toggleMode()}>
            Current: {mode}
          </button>
        </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* The Map Container */}
          <div className="xl:col-span-2">
            <InspectorLiveMap stage={currentStage} />
          </div>

          {/* Sidebar Controls to move the map icon */}
          <div className="xl:col-span-1">
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800">
              <h4 className="mb-3 text-[10px] font-bold uppercase text-gray-400">Live Stage Control</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => setCurrentStage('inspecting')} className={`text-xs font-bold p-2 rounded ${currentStage === 'inspecting' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                  1. View Inspection
                </button>
                <button onClick={() => setCurrentStage('pickup')} className={`text-xs font-bold p-2 rounded ${currentStage === 'pickup' ? 'bg-yellow-400 text-white' : 'bg-gray-100'}`}>
                  2. View Pickup
                </button>
                <button onClick={() => setCurrentStage('transit')} className={`text-xs font-bold p-2 rounded ${currentStage === 'transit' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>
                  3. View Transit
                </button>
              </div>
            </div>
          </div>
        </div>
        <FraudAlertPanel />
        
        <LogisticsCalculator dealData={activeDeal} />

        <EscrowVault />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <PinHandshakeMonitor />
          </div>
          <div className="xl:col-span-1">
            <SecurityAuditLog />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <LatestTransactions />
          <InspectionQueue />
        </div>
        <div className="my-6">
          <AcquisitionOverview />
        </div>

        <Button onClick={() => setIsModalOpen(true)}>New Export</Button>

        <NewExportModal 
          show={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    
  );
};

export default DashboardPage;