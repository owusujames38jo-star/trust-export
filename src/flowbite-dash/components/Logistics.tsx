import { FC } from 'react';
import { Badge, Table, Dropdown } from 'flowbite-react';

export const AcquisitionOverview: FC = function () {
  const shipments = [
    { vehicle: "2019 Ford F-150", sellerPayout: "Pending", carrierStatus: "In Transit", progress: 60, color: "bg-blue-600" },
    { vehicle: "2022 Honda Civic", sellerPayout: "Paid", carrierStatus: "Delivered", progress: 100, color: "bg-green-500" },
    { vehicle: "2021 Toyota RAV4", sellerPayout: "Released", carrierStatus: "Loading...", progress: 25, color: "bg-yellow-400" },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Logistics & Payout Pipeline</h3>
          <p className="text-sm text-gray-500">Tracking Seller Payouts vs. Carrier Milestones</p>
        </div>
      </div>
      <Table className="min-w-full table-fixed">
        <Table.Head>
          <Table.HeadCell>Vehicle</Table.HeadCell>
          <Table.HeadCell>Seller Payout</Table.HeadCell>
          <Table.HeadCell>Carrier Milestone</Table.HeadCell>
          <Table.HeadCell>Delivery Progress</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
          {shipments.map((ship, i) => (
            <Table.Row key={i}>
              <Table.Cell className="text-sm font-medium dark:text-white">{ship.vehicle}</Table.Cell>
              <Table.Cell><Badge color={ship.sellerPayout === "Paid" ? "success" : "info"}>{ship.sellerPayout}</Badge></Table.Cell>
              <Table.Cell className="text-xs text-gray-500">{ship.carrierStatus}</Table.Cell>
              <Table.Cell>
                <div className="flex items-center">
                  <span className="mr-2 text-xs font-medium dark:text-white">{ship.progress}%</span>
                  <div className="h-2 w-full rounded-sm bg-gray-200 dark:bg-gray-700">
                    <div className={`h-2 rounded-sm ${ship.color}`} style={{ width: `${ship.progress}%` }} />
                  </div>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export const LatestTransactions: FC = function () {
  const milestones = [
    { id: "TX-9901", vehicle: "2019 Ford F-150", amount: "$28,500", status: "Funds Locked", color: "info", detail: "Phase 2: Escrow Secured" },
    { id: "TX-8824", vehicle: "2022 Honda Civic", amount: "$150", status: "Released", color: "success", detail: "Phase 1: Inspection Complete" },
    { id: "TX-7731", vehicle: "2021 Toyota RAV4", amount: "$32,000", status: "In Transit", color: "warning", detail: "Phase 3: Vehicle with Carrier" },
    { id: "TX-6612", vehicle: "2015 Mazda CX-5", amount: "$12,400", status: "Disputed", color: "failure", detail: "VIN Mismatch Detected" }
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Active Milestone Escrow</h3>
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Vehicle & ID</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          <Table.HeadCell>Stage</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {milestones.map((m, i) => (
            <Table.Row key={i}>
              <Table.Cell className="whitespace-nowrap">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">{m.vehicle}</div>
                <div className="text-xs text-gray-500">{m.id}</div>
              </Table.Cell>
              <Table.Cell className="text-sm font-bold text-gray-900 dark:text-white">{m.amount}</Table.Cell>
              <Table.Cell className="text-xs text-gray-500 italic">{m.detail}</Table.Cell>
              <Table.Cell><Badge color={m.color}>{m.status}</Badge></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export const ExportPipeline: FC = function () {
  const exports = [
    { vin: "1FA...9901", port: "Port of Savannah", destination: "Dubai (Jebel Ali)", vessel: "MSC AMALFI", container: "MSCU882910", status: "Customs Cleared" },
    { vin: "JTD...8824", port: "Port of New Jersey", destination: "Lagos, Nigeria", vessel: "MAERSK OHIO", container: "MAEU445122", status: "Manifest Filed" },
  ];

  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 mt-6">
      <h3 className="text-xl font-bold mb-4">International Export Manifest</h3>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>VIN</Table.HeadCell>
          <Table.HeadCell>Origin/Dest</Table.HeadCell>
          <Table.HeadCell>Vessel/Container</Table.HeadCell>
          <Table.HeadCell>Customs</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {exports.map((exp, i) => (
            <Table.Row key={i}>
              <Table.Cell className="font-mono text-xs">{exp.vin}</Table.Cell>
              <Table.Cell>
                <div className="text-xs font-bold">{exp.port}</div>
                <div className="text-xs text-blue-600">→ {exp.destination}</div>
              </Table.Cell>
              <Table.Cell>
                <div className="text-xs">{exp.vessel}</div>
                <div className="text-xs text-gray-400">{exp.container}</div>
              </Table.Cell>
              <Table.Cell><Badge color="success">{exp.status}</Badge></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

const Datepicker: FC = () => (
  <Dropdown inline label="Last 7 days">
    <Dropdown.Item>Last 7 days</Dropdown.Item>
    <Dropdown.Item>Last 30 days</Dropdown.Item>
    <Dropdown.Item>Last 90 days</Dropdown.Item>
  </Dropdown>
);