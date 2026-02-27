import { FC, useState } from 'react';
import { Badge, Table, Button, TextInput, Label } from 'flowbite-react';
import { HiMagnifyingGlass, HiPlus, HiUserGroup } from 'react-icons/hi2';

// 1. The VIN Input & Table Section
const VINIntakeTool: FC = () => {
  const [vin, setVin] = useState("");
  const intakeRequests = [
    { id: "REQ-772", vehicle: "Awaiting VIN", source: "FB Marketplace", status: "Pending Data", color: "warning" },
    { id: "REQ-775", vehicle: "2020 BMW X5", source: "AutoTrader", status: "VIN Verified", color: "success" },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="w-full md:w-1/2">
          <Label htmlFor="vin-search" value="Verify New VIN" className="mb-2 block" />
          <TextInput 
            id="vin-search" 
            placeholder="Enter 17-character VIN..." 
            value={vin} 
            onChange={(e) => setVin(e.target.value)}
            icon={HiMagnifyingGlass}
          />
        </div>
        <Button gradientDuoTone="cyanToBlue">
          <HiPlus className="mr-2 h-5 w-5" /> Add to Queue
        </Button>
      </div>

      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-bold dark:text-white">Active Intake Queue</h3>
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Request ID</Table.HeadCell>
            <Table.HeadCell>Vehicle/VIN</Table.HeadCell>
            <Table.HeadCell>Source</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {intakeRequests.map((req) => (
              <Table.Row key={req.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="font-mono text-blue-600">{req.id}</Table.Cell>
                <Table.Cell className="dark:text-white font-medium">{req.vehicle}</Table.Cell>
                <Table.Cell className="text-gray-500">{req.source}</Table.Cell>
                <Table.Cell><Badge color={req.color as any}>{req.status}</Badge></Table.Cell>
                <Table.Cell>
                  <button className="text-sm font-bold text-blue-600 hover:underline">Process</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

// 2. The Inspection List Section (formerly LatestCustomers)
export const InspectionQueue: FC = function () {
  const inspections = [
    { inspector: "Sarah Jenkins", location: "Toronto, ON", status: "On-Site", type: "Platform Assigned", img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
    { inspector: "User Provided", location: "Montreal, QC", status: "Skipped", type: "Self-Verified", img: "" },
    { inspector: "Mark Ross", location: "Calgary, AB", status: "Completed", type: "Platform Assigned", img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg" },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Inspection Field Status</h3>
        <Badge color="purple">Inspector Network: 42 Active</Badge>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {inspections.map((ins, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  {ins.img ? <img className="h-8 w-8 rounded-full" src={ins.img} alt="" /> : <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700"><HiUserGroup className="h-5 w-5 text-gray-400" /></div>}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{ins.inspector}</p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">{ins.location} • <span className="italic">{ins.type}</span></p>
                </div>
                <Badge color={ins.status === "Skipped" ? "gray" : (ins.status === "On-Site" ? "info" : "success")}>{ins.status}</Badge>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 3. THE MAIN EXPORT (What the Sidebar loads)
export const VINIntakePage: FC = () => {
    return (
        <div className="space-y-6">
            <VINIntakeTool />
            <InspectionQueue />
        </div>
    );
}