import { FC } from 'react';
import { Badge, Table, Button, Progress, Card } from 'flowbite-react';
// Changed HiReceiptTax to HiReceiptPercent to match the library
import { HiShieldCheck, HiReceiptPercent, HiTruck, HiCheckBadge } from 'react-icons/hi2';

export const EscrowVault: FC = () => {
  const deals = [
    { 
      id: "DL-101", 
      type: "Inspection Service", 
      amount: "$350.00", 
      status: "Funds Held", 
      trigger: "Inspector Confirmation",
      progress: 50,
      color: "purple"
    },
    { 
      id: "DL-102", 
      type: "Full Vehicle Export", 
      amount: "$42,500.00", 
      status: "Awaiting Logistics Quote", 
      trigger: "Final Invoice Approval",
      progress: 20,
      color: "info"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-purple-600 uppercase">Service Escrow (Inspections)</p>
              <h5 className="text-2xl font-black dark:text-white">$1,450.00</h5>
            </div>
            {/* Using HiReceiptPercent here */}
            <HiReceiptPercent className="text-3xl text-purple-500" />
          </div>
        </Card>
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase">Asset Escrow (Vehicle + Shipping)</p>
              <h5 className="text-2xl font-black dark:text-white">$141,050.00</h5>
            </div>
            <HiShieldCheck className="text-3xl text-blue-500" />
          </div>
        </Card>
      </div>

      {/* The Active Ledger */}
      <div className="rounded-xl border bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
          <h3 className="font-bold dark:text-white">Active Milestone Ledger</h3>
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Deal Type</Table.HeadCell>
            <Table.HeadCell>Amount Locked</Table.HeadCell>
            <Table.HeadCell>Release Trigger</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {deals.map((deal) => (
              <Table.Row key={deal.id}>
                <Table.Cell>
                   <span className="block font-bold text-gray-900 dark:text-white">{deal.type}</span>
                   <span className="text-xs text-gray-500 font-mono">{deal.id}</span>
                </Table.Cell>
                <Table.Cell className="font-mono font-bold text-blue-600">{deal.amount}</Table.Cell>
                <Table.Cell className="text-xs italic text-gray-600 dark:text-gray-400">
                  On {deal.trigger}
                </Table.Cell>
                <Table.Cell><Badge color={deal.color as any}>{deal.status}</Badge></Table.Cell>
                <Table.Cell>
                  <Button size="xs" color={deal.type.includes("Inspection") ? "purple" : "info"}>
                    {deal.type.includes("Inspection") ? "Verify Report" : "Calculate Logistics"}
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};