import { FC, useState } from 'react';
import { Label, TextInput, Card, Button } from 'flowbite-react';
// Changed HiReceiptTax to HiReceiptPercent
import { HiTruck, HiReceiptPercent, HiCalculator, HiPaperAirplane } from 'react-icons/hi2';

export const LogisticsCalculator: FC = () => {
  const [costs, setCosts] = useState({
    vehiclePrice: 0,
    inlandShipping: 0,
    oceanFreight: 0,
    platformFee: 250, 
  });

  const totalEscrow = Object.values(costs).reduce((a, b) => a + b, 0);

  return (
    <Card className="h-full shadow-lg border-t-4 border-blue-600 dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-blue-100 p-2 rounded-lg dark:bg-blue-900">
          <HiCalculator className="text-xl text-blue-600 dark:text-blue-300" />
        </div>
        <h3 className="text-xl font-bold dark:text-white">Export Quote Engine</h3>
      </div>
      
      <p className="text-xs text-gray-500 mb-4 italic">
        Calculate total Tier-2 funds (Vehicle + Logistics + Fees)
      </p>

      <div className="space-y-4">
        <div>
          <Label className="text-xs font-bold uppercase" htmlFor="price" value="1. Vehicle Purchase Price ($)" />
          <TextInput 
            id="price" 
            type="number" 
            placeholder="0.00" 
            required
            onChange={(e) => setCosts({...costs, vehiclePrice: Number(e.target.value)})} 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-xs font-bold uppercase" htmlFor="inland" value="2. Inland (Truck)" />
            <TextInput 
              id="inland" 
              type="number" 
              placeholder="0.00"
              onChange={(e) => setCosts({...costs, inlandShipping: Number(e.target.value)})} 
            />
          </div>
          <div>
            <Label className="text-xs font-bold uppercase" htmlFor="ocean" value="3. Ocean Freight" />
            <TextInput 
              id="ocean" 
              type="number" 
              placeholder="0.00"
              onChange={(e) => setCosts({...costs, oceanFreight: Number(e.target.value)})} 
            />
          </div>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
          <div className="flex justify-between text-sm mb-2 dark:text-gray-300">
            <span className="flex items-center gap-1 font-medium">
              <HiReceiptPercent className="text-blue-500" /> TrustExport Fee:
            </span>
            <span className="font-bold text-gray-900 dark:text-white">${costs.platformFee}</span>
          </div>
          
          <div className="flex justify-between text-sm mb-3 dark:text-gray-300">
            <span className="flex items-center gap-1 font-medium">
              <HiTruck className="text-blue-500" /> Shipping Total:
            </span>
            <span className="font-bold text-gray-900 dark:text-white">
              ${(costs.inlandShipping + costs.oceanFreight).toLocaleString()}
            </span>
          </div>

          <hr className="my-3 border-gray-200 dark:border-gray-600" />
          
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold text-gray-500 uppercase">Grand Total Escrow:</span>
            <span className="text-2xl font-black text-blue-700 dark:text-blue-400">
              ${totalEscrow.toLocaleString()}
            </span>
          </div>
        </div>

        <Button className="w-full" color="blue">
          <HiPaperAirplane className="mr-2 h-4 w-4 rotate-45" />
          Send Quote to Buyer
        </Button>
      </div>
    </Card>
  );
};