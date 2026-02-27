import { Modal, Button, Label, TextInput, Select, FileInput } from "flowbite-react";
import { HiTruck, HiUser, HiClipboardCheck } from "react-icons/hi";

interface NewExportModalProps {
  show: boolean;
  onClose: () => void;
}

export default function NewExportModal({ show, onClose }: NewExportModalProps) {
  return (
    <Modal show={show} onClose={onClose} size="md" root={document.body} className="z-[2000]" >
      <Modal.Header>Register New Export Vehicle</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          {/* VIN Intake */}
          <div>
            <Label htmlFor="vin" value="Vehicle VIN (17 Characters)" />
            <TextInput 
              id="vin" 
              placeholder="1FA..." 
              icon={HiTruck} 
              required 
              helperText="The system will auto-decode the Year, Make, and Model."
            />
          </div>

          {/* Buyer Assignment */}
          <div>
            <Label htmlFor="buyer" value="Assign to Buyer" />
            <Select id="buyer" icon={HiUser} required>
              <option>Select a Buyer</option>
              <option>Zaid Motors (Dubai)</option>
              <option>Global Auto Group (Lagos)</option>
              <option>Private Client - Al-Futtaim</option>
            </Select>
          </div>

          {/* Inspection Trigger */}
          <div>
            <Label htmlFor="inspection" value="Initial Inspection Status" />
            <Select id="inspection" icon={HiClipboardCheck} required>
              <option value="pending">Pending Arrival (Warehouse Alert)</option>
              <option value="auction">Auction Photos Received</option>
              <option value="skip">Skip to Shipping (Direct Transfer)</option>
            </Select>
          </div>

          {/* Document Upload */}
          <div>
            <Label htmlFor="title" value="Upload Vehicle Title / Bill of Sale" />
            <FileInput id="title" helperText="PDF, PNG, or JPG (Max 5MB)" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button color="blue" onClick={onClose}>Create Export Record</Button>
        <Button color="gray" onClick={onClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}