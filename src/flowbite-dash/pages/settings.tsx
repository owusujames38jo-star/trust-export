import React from 'react';
import { Card, Label, TextInput, ToggleSwitch, Button, Tabs } from 'flowbite-react';
import { HiUserCircle, HiAdjustments, HiBell, HiShieldCheck } from 'react-icons/hi';

export default function SettingsPage() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Platform Settings</h1>
      
        <Tabs.Group aria-label="Settings Tabs" style="underline">

        {/* Profile Section */}
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <Card className="max-w-2xl">
            <h3 className="text-lg font-semibold">Admin Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="admin-name" value="Admin Name" />
                <TextInput id="admin-name" defaultValue="Admin User" required />
              </div>
              <div>
                <Label htmlFor="admin-email" value="Support Email" />
                <TextInput id="admin-email" defaultValue="admin@trustauto.com" required />
              </div>
            </div>
            <Button color="blue" className="w-fit">Update Profile</Button>
          </Card>
        </Tabs.Item>

        {/* System Config Section */}
        <Tabs.Item title="System" icon={HiAdjustments}>
          <Card className="max-w-2xl">
            <h3 className="text-lg font-semibold">System Preferences</h3>
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-gray-500">Adjust the interface for night use.</p>
                </div>
                <ToggleSwitch 
                    label="Enable Dark Mode" 
                    checked={darkMode} 
                    onChange={setDarkMode} 
                />

              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-500">Alerts for new inventory and vault access.</p>
                </div>
                <ToggleSwitch 
                    label="Enable Notifications" 
                    checked={notifications} 
                    onChange={setNotifications} 
                />
              </div>
            </div>
          </Card>
        </Tabs.Item>

        {/* Security Section */}
        <Tabs.Item title="Security" icon={HiShieldCheck}>
          <Card className="max-w-2xl">
            <h3 className="text-lg font-semibold text-red-600">Access Control</h3>
            <p className="text-sm text-gray-500 mb-4">Manage your administrative password.</p>
            <div className="space-y-4">
              <TextInput type="password" placeholder="Current Password" />
              <TextInput type="password" placeholder="New Password" />
              <Button color="failure">Change Password</Button>
            </div>
          </Card>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}