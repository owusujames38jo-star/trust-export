import React from 'react';
import { Card, Label, TextInput, Button, Badge } from 'flowbite-react';
import { HiMail, HiBadgeCheck, HiShieldCheck } from 'react-icons/hi';

export default function UserProfile() {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Profile Summary */}
        <div className="md:col-span-1">
          <Card className="text-center">
            <div className="flex flex-col items-center pb-4">
              <img
                className="mb-3 h-24 w-24 rounded-full shadow-lg border-4 border-blue-500"
                src="https://ui-avatars.com/api/?name=Admin&size=128"
                alt="Admin"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Admin User</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">System Administrator</span>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <Badge color="info" icon={HiBadgeCheck}>Verified</Badge>
                <Badge color="purple" icon={HiShieldCheck}>Root Access</Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Form Details */}
        <div className="md:col-span-2">
          <Card>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label value="Full Name" />
                <TextInput defaultValue="Admin User" />
              </div>
              <div>
                <Label value="Email Address" />
                <TextInput icon={HiMail} defaultValue="admin@trustauto.com" readOnly />
              </div>
            </div>
            <div className="mt-6">
              <Button color="blue">Save Profile Changes</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}