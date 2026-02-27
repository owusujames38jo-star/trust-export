import { FC } from 'react';
import { Table, Badge } from 'flowbite-react';

export const PinHandshakeMonitor: FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-700 flex justify-between items-center">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Active Handshake Monitor
        </h3>
        <Badge color="info">3 Active PINs</Badge>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="py-2">PIN / Token</Table.HeadCell>
            <Table.HeadCell className="py-2">Status</Table.HeadCell>
            <Table.HeadCell className="py-2">TTL</Table.HeadCell>
            <Table.HeadCell className="py-2">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="text-xs">
              <Table.Cell className="font-mono font-bold text-blue-600">TX-8821</Table.Cell>
              <Table.Cell><Badge color="warning" size="xs">Awaiting Seller</Badge></Table.Cell>
              <Table.Cell className="font-mono text-[10px]">14h 22m</Table.Cell>
              <Table.Cell><button className="text-red-600 hover:underline">Revoke</button></Table.Cell>
            </Table.Row>
            <Table.Row className="text-xs">
              <Table.Cell className="font-mono font-bold text-blue-600">TX-4402</Table.Cell>
              <Table.Cell><Badge color="success" size="xs">Verified</Badge></Table.Cell>
              <Table.Cell className="text-gray-400">--</Table.Cell>
              <Table.Cell><button className="text-blue-600 hover:underline">View VIN</button></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export const SecurityAuditLog: FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-gray-900 p-4 shadow-sm h-full">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">System Trace</h3>
        <div className="flex items-center gap-1">
           <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
           <span className="text-[9px] text-green-500 font-mono italic">Live</span>
        </div>
      </div>
      <div className="h-40 overflow-y-auto font-mono text-[10px] space-y-1 text-green-400">
        <p><span className="text-gray-500">[20:14:02]</span> INFO: PIN TX-8821 generated</p>
        <p className="text-yellow-300"><span className="text-gray-500">[20:12:45]</span> WARN: IP: 192.168.1.1 invalid PIN</p>
        <p><span className="text-gray-500">[19:55:10]</span> INFO: VIN extraction success (FORD)</p>
        <p className="text-red-500"><span className="text-gray-500">[19:42:01]</span> CRIT: Geofence violation node_04</p>
      </div>
    </div>
  );
};

export default PinHandshakeMonitor;
