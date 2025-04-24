import { useState } from "react";
import MainLayout from "./Custom/MainLayout";

export default function Components() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [showToaster, setShowToaster] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <MainLayout
      showLoginToaster={showToaster}
      toasterHeader="Notification"
      toasterText="This is a sample toaster message."
      toasterVarient="info"
      toasterAnimation="fadeIn"
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">UI Components Showcase</h1>

        {/* Accordion */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Accordion</h2>
          <gov-accordion open-index="0">
            <gov-accordion-item title="Section 1">
              Content for section 1.
            </gov-accordion-item>
            <gov-accordion-item title="Section 2">
              Content for section 2.
            </gov-accordion-item>
            <gov-accordion-item title="Section 3">
              Content for section 3.
            </gov-accordion-item>
          </gov-accordion>
        </section>

        {/* Badge */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Badge</h2>
          <gov-badge variant="success">Success</gov-badge>
          <gov-badge variant="warning">Warning</gov-badge>
          <gov-badge variant="danger">Error</gov-badge>
        </section>

        {/* Dropdown */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Dropdown</h2>
          <gov-dropdown
            label="Select an option"
            options='["Option 1", "Option 2", "Option 3"]'
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          ></gov-dropdown>
        </section>

        {/* Toaster */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Toaster</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowToaster(true)}
          >
            Show Toaster
          </button>
        </section>

        {/* Upload */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upload</h2>
          <gov-upload
            label="Upload Files"
            multiple
            onChange={handleFileUpload}
          ></gov-upload>
          <ul className="mt-2">
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </section>

        {/* List */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">List</h2>
          <gov-list>
            <gov-list-item>Item 1</gov-list-item>
            <gov-list-item>Item 2</gov-list-item>
            <gov-list-item>Item 3</gov-list-item>
          </gov-list>
        </section>

        {/* Stepper */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Stepper</h2>
          <gov-stepper current-step={currentStep}>
            <gov-stepper-step title="Step 1" description="Description for step 1"></gov-stepper-step>
            <gov-stepper-step title="Step 2" description="Description for step 2"></gov-stepper-step>
            <gov-stepper-step title="Step 3" description="Description for step 3"></gov-stepper-step>
          </gov-stepper>
          <div className="mt-4">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNextStep}
              disabled={currentStep === 3}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
