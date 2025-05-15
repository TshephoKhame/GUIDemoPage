import { useState } from "react";
import MainLayout from "./Custom/MainLayout";

export default function Components() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
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
      showLoginToaster={true}
      toasterHeader="Components"
      toasterText="This is the End."
      toasterVarient="danger"
      toasterAnimation="fadeIn"
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-15">UI Components Showcase</h1>
        {/* Stepper */}
        <gov-box className="mb-6 mt-15" size="12">
          <h2 className="font-semibold mb-25">Stepper</h2>

          <gov-box>
            <gov-stepper
              variant="horizontal"
              validateStep="async t=>(console.log(`Validating step ${t}`),!0)"
              onSubmit="async()=>{console.log('Form submitted')}"
              next-text="Next"
              prev-text="Previous"
              submit-text="Submit"
              reset-on-submit="true"
              max-steps-visible="5"
              styles={{"borderRadius": "25px"}}
              buttonStyles={{ "borderRadius": "30px", "width": "100px"}}
            >
              <div slot="step-0">
                <div className="">
                  {/* Accordion */}
                  <gov-box className="mb-4" size="12">
                    <h1 className="font-semibold mb-25">Accordion</h1>
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
                </div>
              </div>
              ,
              <div slot="step-1">
                <div className="">
                  {/* Dropdown */}
                  <gov-row className="mb-15 p-4">
                    <gov-col size="12" className="mb-4">
                      <gov-drop
                        heading="File Type"
                        subtitle="Select an option from below"
                        animation-delay=""
                        animation=""
                        animation-speed=""
                        options='["Option 1","Option 2","Option 3","Option 4"]'
                      ></gov-drop>
                    </gov-col>
                  </gov-row>
                </div>
              </div>
              ,
              <div slot="step-2">
                <div className="">
                  {/* Upload */}
                  <gov-row className="mb-6">
                    <gov-col className="mb-6" size="12" lg="12" md="12">
                      <h2 className="font-semibold mb-25">Upload</h2>
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
                </div>
              </div>
              ,
              <div slot="step-3">
                <div className="">
                  {/* List */}
                  <gov-box size="12" className="mb-6">
                    <h2 className="font-semibold mb-25">List</h2>
                    <gov-list>
                      <gov-list-item>Item 1</gov-list-item>
                      <gov-list-item>Item 2</gov-list-item>
                      <gov-list-item>Item 3</gov-list-item>
                    </gov-list>
                  </gov-box>
                </div>
              </div>
              <div slot="step-4">
                <div className="p-15">
                  {/* Badge */}
                  <gov-box classes="p-6">
                    <h2 className="font-semibold mb-25">Badge</h2>
                    <h2 className="text-xl font-semibold mb-25">Regular</h2>
                    <gov-badge variant="success">Success</gov-badge>
                    <gov-badge variant="warning">Warning</gov-badge>
                    <gov-badge variant="danger">Danger</gov-badge>
                    <gov-badge variant="info">Info</gov-badge>
                    <gov-badge variant="secondary">Secondary</gov-badge>
                    <gov-badge variant="primary">Primary</gov-badge>

                     <h2 className="text-xl font-semibold mb-25">Large</h2>
                    <gov-badge size="lg" variant="success">Success</gov-badge>
                    <gov-badge size="lg" variant="warning">Warning</gov-badge>
                    <gov-badge size="lg" variant="danger">Danger</gov-badge>
                    <gov-badge size="lg" variant="info">Info</gov-badge>
                    <gov-badge size="lg" variant="secondary">Secondary</gov-badge>
                    <gov-badge size="lg" variant="primary">Primary</gov-badge>
                  </gov-box>
                </div>
              </div>
            </gov-stepper>
          </gov-box>
        </gov-box>
      </div>
    </MainLayout>
  );
}
