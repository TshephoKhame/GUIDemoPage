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

          <gov-box isFlexBox="true" gap="4" >
            <gov-box className="mb-4" size="8">

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
            </gov-box>
            <gov-box className="mb-4" size="4">

              {/* Badge */}
              <gov-box classes="p-6">
                <h2 className="text-xl font-semibold mb-4">Badge</h2>
                <gov-badge variant="success">Success</gov-badge>
                <gov-badge variant="warning">Warning</gov-badge>
                <gov-badge variant="error">Error</gov-badge>
              </gov-box>
            </gov-box>
          </gov-box>


        </section>


        {/* Dropdown */}
        <gov-row className="mb-6 p-4">
          <gov-col size="6" className="mb-4">
            <gov-drop heading="File Type" subtitle="Select an option from below" animation-delay="" animation="" animation-speed="" options="[&quot;Option 1&quot;,&quot;Option 2&quot;,&quot;Option 3&quot;,&quot;Option 4&quot;]">
            </gov-drop>
          </gov-col>
        </gov-row>

        {/* Toaster */}
        {/* <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Toaster</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowToaster(true)}
          >
            Show Toaster
          </button>
        </section> */}

        {/* Upload */}
        <gov-row className="mb-6">
          <gov-col className="mb-6" size="6" lg="6" md="12">
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
          </gov-col>
        </gov-row>

        {/* List */}
        <gov-box size="8" className="mb-6">
          <h2 className="text-xl font-semibold mb-2">List</h2>
          <gov-list>
            <gov-list-item>Item 1</gov-list-item>
            <gov-list-item>Item 2</gov-list-item>
            <gov-list-item>Item 3</gov-list-item>
          </gov-list>
        </gov-box>

        {/* Stepper */}
        <gov-box className="mb-6" size="8" >
          <h2 className="text-xl font-semibold mb-4">Stepper</h2>

              <gov-box>

                
          <gov-stepper
            variant="horizontal" validateStep="async t=>(console.log(`Validating step ${t}`),!0)"
            onSubmit="async()=>{console.log('Form submitted')}"
            next-text="Next"
            prev-text="Previous"
            submit-text="Submit"
            reset-on-submit="true"
            max-steps-visible="5">

            <div slot="step-0"><p>Enter your personal information here.</p></div>,
            <div slot="step-1"><p>Provide your contact details.</p></div>,
            <div slot="step-2"><p>Verify your information.</p></div>,
            <div slot="step-3"><p>Confirm and submit your details.</p></div>

          </gov-stepper>
          
          </gov-box>
        </gov-box>
      </div>
    </MainLayout>
  );
}
