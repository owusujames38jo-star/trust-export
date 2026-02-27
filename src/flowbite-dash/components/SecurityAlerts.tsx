import { FC } from 'react';
import { Badge } from 'flowbite-react';

const FraudAlertPanel: FC = function () {
  const alerts = [
    { 
      id: "VEH-7731", 
      type: "VIN MISMATCH", 
      source: "Carrier Scan", 
      attempts: 2,
      message: "VIN scan does not match verified report. Carrier has 1 attempt remaining.",
      severity: "warning" 
    },
    { 
      id: "VEH-9902", 
      type: "ESCROW FROZEN", 
      source: "System Auto-Lock", 
      attempts: 3, 
      message: "3 Failed VIN matches. Funds locked to protect buyer. Manual review required.",
      severity: "failure" 
    }
  ];

  return (
    <div className="mb-6 space-y-4">
      {alerts.map((alert, i) => (
        <div key={i} className={`flex items-center p-4 border-l-4 rounded-lg bg-white shadow-sm dark:bg-gray-800 ${alert.severity === 'failure' ? 'border-red-600' : 'border-yellow-400'}`}>
          <div className="ml-4 flex-1">
            <div className="flex items-center space-x-2">
              <h4 className={`text-sm font-bold uppercase ${alert.severity === 'failure' ? 'text-red-600' : 'text-yellow-600'}`}>
                {alert.type}
              </h4>
              <Badge color={alert.attempts >= 3 ? "failure" : "warning"}>
                Attempt {alert.attempts}/3
              </Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
          </div>
          
          <div className="flex space-x-3">
             {alert.severity === 'warning' && (
               <button className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-white px-3 py-1 rounded">
                 Notify Carrier
               </button>
             )}
             <button className="text-xs font-semibold text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50">
               {alert.severity === 'failure' ? "Contact Seller" : "Manual Freeze"}
             </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FraudAlertPanel;