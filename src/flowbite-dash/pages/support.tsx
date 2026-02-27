import React from 'react';
import { Card, Accordion, Label, TextInput, Textarea, Button, Badge } from 'flowbite-react';
import { HiQuestionMarkCircle, HiMail, HiChatAlt2, HiPhone } from 'react-icons/hi';

export default function SupportPage() {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold dark:text-white">Support Center</h1>
        <Badge color="info" icon={HiChatAlt2} size="sm">Average Response: 10 mins</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: FAQ/Knowledge Base */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
              <HiQuestionMarkCircle className="text-blue-600" /> Frequently Asked Questions
            </h3>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>How do I authorize a VIN intake?</Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-500 dark:text-gray-400">
                    Navigate to the "Intake" tab, enter the 17-digit VIN, and click "Validate." Once the system confirms the vehicle, the status will update to "Pending Inspection."
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Where is the Seller PIN generated?</Accordion.Title>
                <Accordion.Content>
                  <p className="text-gray-500 dark:text-gray-400">
                    The PIN is generated automatically in the "Verify" section once the seller's documentation has been uploaded to the Vault.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Card>
        </div>

        {/* Right Column: Contact/Help Ticket */}
        <div className="lg:col-span-1">
          <Card>
            <h3 className="text-xl font-bold mb-4">Open a Ticket</h3>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="subject" value="Issue Subject" />
                <TextInput id="subject" placeholder="e.g. Vault Sync Error" required />
              </div>
              <div>
                <Label htmlFor="description" value="Detailed Description" />
                <Textarea id="description" placeholder="Describe the issue..." required rows={4} />
              </div>
              <Button color="blue">Submit Support Ticket</Button>
            </form>
            
            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <HiMail className="text-lg" /> support@trustauto.com
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <HiPhone className="text-lg" /> +1 (800) TRUST-AUTO
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}