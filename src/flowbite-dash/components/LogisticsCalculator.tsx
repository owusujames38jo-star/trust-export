import { FC } from 'react';
import { Card, Button } from 'flowbite-react';
import { HiCalculator } from 'react-icons/hi2';

interface CalculatorProps {
  dealData?: { 
    vin: string; 
    id: string; 
    status: string 
  };
}

export const LogisticsCalculator: FC<CalculatorProps> = ({ dealData }) => {
  // 1. Business Automation Logic
  const INSPECTOR_FEE = 350;
  const SERVICE_FEE_PCT = 0.10; // Your 10% cut
  const totalTier1 = INSPECTOR_FEE + (INSPECTOR_FEE * SERVICE_FEE_PCT);

  // 2. The "Standby" View: If no data is passed yet
  if (!dealData) {
    return (
      <Card>
        <div className="text-center p-4">
          <p className="text-gray-500 italic text-sm">Waiting for vehicle intake data...</p>
          <Button color="gray" disabled className="mt-4 w-full">
            Initialize Phase 1 Escrow
          </Button>
        </div>
      </Card>
    );
  }

  // 3. The "Active" View: Automated calculation based on the dealData
  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <HiCalculator className="text-xl text-blue-600" />
        <h3 className="font-bold dark:text-white">Automated Quote: {dealData.vin}</h3>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-sm dark:text-gray-300">
          <span>Inspector Base:</span>
          <span>${INSPECTOR_FEE}</span>
        </div>
        <div className="flex justify-between text-sm text-blue-600 font-medium">
          <span>TrustAuto Service (10%):</span>
          <span>${(INSPECTOR_FEE * SERVICE_FEE_PCT).toFixed(2)}</span>
        </div>
        
        <div className="border-t border-dashed pt-2 flex justify-between font-bold text-lg dark:text-white">
          <span>Buyer Total:</span>
          <span>${totalTier1.toFixed(2)}</span>
        </div>
        
        <Button color="blue" className="w-full mt-2">
          Generate Automated Invoice
        </Button>
      </div>
    </Card>
  );
};