import { FC } from "react";
import { Badge, Card, Table } from "flowbite-react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const NotificationsPage: FC = function () {
  const notifications = [
    { id: 1, type: "Logistics", title: "Vehicle Picked Up", message: "VIN: 1HGCM... is in transit.", time: "2 min ago", status: "success" },
    { id: 2, type: "Escrow", title: "Payment Verified", message: "Funds released for Zaid Motors.", time: "1 hour ago", status: "info" },
    { id: 3, type: "Security", title: "Login Alert", message: "New login from IP: 192.168.1.1", time: "5 hours ago", status: "warning" },
  ];

  return (
    
      <div className="px-4 pt-6">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">All Notifications</h1>
        <Card>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Type</Table.HeadCell>
              <Table.HeadCell>Notification</Table.HeadCell>
              <Table.HeadCell>Time</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {notifications.map((n) => (
                <Table.Row key={n.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    <Badge color={n.status === 'success' ? 'success' : 'blue'}>{n.type}</Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="text-sm font-semibold dark:text-white">{n.title}</div>
                    <div className="text-xs text-gray-500">{n.message}</div>
                  </Table.Cell>
                  <Table.Cell className="text-xs text-gray-400">{n.time}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card>
      </div>
    
  );
};

export default NotificationsPage;