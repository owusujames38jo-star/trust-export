import { FC } from "react";
import { Badge, Table, Card, Tabs, Button } from "flowbite-react";
import { HiUserGroup, HiTruck, HiPhone } from "react-icons/hi";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const PartnersPage: FC = () => {
  return (
      <div className="px-4 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold dark:text-white">Inspectors & Carriers</h1>
          <Button color="blue" size="sm">Add New Partner</Button>
        </div>

        <Tabs.Group aria-label="Partner tabs" style="underline">
          {/* Tab 1: Inspectors */}
          <Tabs.Item active title="Field Inspectors" icon={HiUserGroup}>
            <Card>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Inspector Name</Table.HeadCell>
                  <Table.HeadCell>Region</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>Active Jobs</Table.HeadCell>
                  <Table.HeadCell>Contact</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="font-medium text-gray-900 dark:text-white">John Smith</Table.Cell>
                    <Table.Cell>Toronto, ON</Table.Cell>
                    <Table.Cell><Badge color="success">Available</Badge></Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell><HiPhone className="cursor-pointer text-blue-600" /></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Tabs.Item>

          {/* Tab 2: Carriers */}
          <Tabs.Item title="Carriers / Trucking" icon={HiTruck}>
            <Card>
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Company</Table.HeadCell>
                  <Table.HeadCell>Fleet Size</Table.HeadCell>
                  <Table.HeadCell>Routes</Table.HeadCell>
                  <Table.HeadCell>Rating</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="font-medium text-gray-900 dark:text-white">Atlas Logistics</Table.Cell>
                    <Table.Cell>12 Trucks</Table.Cell>
                    <Table.Cell>Canada - USA</Table.Cell>
                    <Table.Cell className="text-yellow-400">★★★★☆</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Tabs.Item>
        </Tabs.Group>
      </div>
  );
};

export default PartnersPage;