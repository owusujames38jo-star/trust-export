import { FC, useState, useEffect } from 'react';
import { Badge, Table, Button, Progress, Card } from 'flowbite-react';
import { HiDocumentArrowUp, HiClock, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi2';

export const B13AExports: FC = () => {
  // Mock data: 'filedAt' represents when the B13A was submitted to Customs
  const [exportJobs, setExportJobs] = useState([
    { 
      id: "EXP-9902", 
      vin: "1HGCM82...901", 
      filedAt: new Date(Date.now() - (60 * 60 * 1000 * 68)).toISOString(), // 68 hours ago
      itn: "CA-2026-X8832",
      docs: { title: true, bos: true, b13a: true }
    },
    { 
      id: "EXP-9910", 
      vin: "5NPEH4A...442", 
      filedAt: new Date(Date.now() - (60 * 60 * 1000 * 12)).toISOString(), // 12 hours ago
      itn: "CA-2026-X4412",
      docs: { title: true, bos: true, b13a: true }
    }
  ]);

  // Helper to calculate hours remaining in the 72hr window
  const getRemainingTime = (filedAt: string) => {
    const start = new Date(filedAt).getTime();
    const now = new Date().getTime();
    const elapsedHours = (now - start) / (1000 * 60 * 60);
    const remaining = 72 - elapsedHours;
    return remaining > 0 ? Math.round(remaining) : 0;
  };

  return (
    <div className="space-y-6">
      {/* Header Cards (Same as before) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ... (Active Countdowns, Cleared, Issues cards) ... */}
      </div>

      <div className="rounded-lg bg-white shadow dark:bg-gray-800">
        <div className="p-4 border-b flex justify-between items-center dark:border-gray-700">
          <h3 className="text-lg font-bold dark:text-white">72-Hour Export Clock</h3>
          <Badge color="info">US Customs Automated Export System (AES)</Badge>
        </div>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Export ID</Table.HeadCell>
            <Table.HeadCell>VIN / ITN</Table.HeadCell>
            <Table.HeadCell>Time Remaining</Table.HeadCell>
            <Table.HeadCell>Progress</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {exportJobs.map((job) => {
              const hoursLeft = getRemainingTime(job.filedAt);
              const progressPercent = Math.min(100, Math.round(((72 - hoursLeft) / 72) * 100));
              
              return (
                <Table.Row key={job.id} className="dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-mono font-bold text-blue-600">{job.id}</Table.Cell>
                  <Table.Cell>
                    <div className="text-sm dark:text-white">{job.vin}</div>
                    <div className="text-xs text-gray-400 font-mono">{job.itn}</div>
                  </Table.Cell>
                  <Table.Cell>
                    {hoursLeft > 0 ? (
                      <div className="flex items-center gap-2 text-orange-500 font-bold">
                        <HiClock /> {hoursLeft}h left
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-green-500 font-bold">
                        <HiCheckCircle /> CLEARED
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell className="w-48">
                    <Progress 
                      progress={progressPercent} 
                      color={hoursLeft === 0 ? "green" : (hoursLeft < 12 ? "yellow" : "blue")} 
                      size="sm" 
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Button size="xs" color="light">View Docs</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};