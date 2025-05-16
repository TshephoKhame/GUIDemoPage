import React, { useState } from 'react';

export default function ApplicationsPage () {
  const [activeTab, setActiveTab] = useState('Submitted');
  
 //Service Code Array
 const serviceData = [
  {
    serviceID: "67dc937c01d4063f",
    title: "Formbuilder Test Service",
    submitted: "21 March 2025",
    status: "Submitted",
  },
  {
    serviceID: "b2c8e4f9a1d5c6b7",
    title: "User Registration Service",
    submitted: "22 March 2025",
    status: "Pending",
  },
  {
    serviceID: "c3d9f5a2e6b4h8j1",
    title: "Payment Processing",
    submitted: "23 March 2025",
    status: "In Progress",
  },
  {
    serviceID: "d4e7f2g9c5a3k6l2",
    title: "Support Ticket System",
    submitted: "24 March 2025",
    status: "Resolved",
  },
  {
    serviceID: "e5h6i3j7d8b2m9n4",
    title: "Document Management",
    submitted: "25 March 2025",
    status: "Closed",
  },
  {
    serviceID: "f6k4l1m5n2p7q3r8",
    title: "Employee Onboarding",
    submitted: "26 March 2025",
    status: "Submitted",
  },
  {
    serviceID: "g7m2n9p4q6r1s5t3",
    title: "Procurement System",
    submitted: "27 March 2025",
    status: "Pending",
  },
  {
    serviceID: "h8n3p7q5r2s9t6u4",
    title: "Training Request",
    submitted: "28 March 2025",
    status: "In Progress",
  },
  {
    serviceID: "i9p5q1r8s3t7u2v5",
    title: "Leave Management",
    submitted: "29 March 2025",
    status: "Resolved",
  },
  {
    serviceID: "j1q6r3s9t4u5v8w2",
    title: "Asset Tracking",
    submitted: "30 March 2025",
    status: "Closed",
  },
  {
    serviceID: "k2r7s4t1u6v9w3x5",
    title: "Performance Review",
    submitted: "31 March 2025",
    status: "Submitted",
  },
  {
    serviceID: "l3s8t2u7v1w4x6y9",
    title: "Expense Reporting",
    submitted: "01 April 2025",
    status: "Pending",
  },
  {
    serviceID: "m4t9u3v2w5x7y1z6",
    title: "Customer Feedback",
    submitted: "02 April 2025",
    status: "In Progress",
  },
  {
    serviceID: "n5u1v4w6x8y2z3a7",
    title: "IT Support Request",
    submitted: "03 April 2025",
    status: "Resolved",
  },
  {
    serviceID: "o6v2w9x3y5z4a1b8",
    title: "Recruitment Portal",
    submitted: "04 April 2025",
    status: "Closed",
  },
];
  return (
    <gov-tabs 
      tab-list='["Submitted","Drafts"]' 
      active-tab="Submitted"
      tab-variant="no-background" 
      body-styles='{"border":"none","box-shadow": "none"}'
      styles='{"border": "none"}'
      header-styles='{"border":"none","width":"220px","border-radius":"0px"}'
      active-button-styles='{"color":"black","border":"none"}'
      inactive-button-styles='{"color":"gray","border":"none"}'
    >

    <div slot="Submitted" style={{}}>
      <div style={{ padding: "35px 20px" }}>
        <div className="h2 black-text mb-30" style={{}}>
          Total: {serviceData.length}
        </div>
        <div style={{ overflowX: "scroll",overflowY: "hidden" }}> 
        {/* Title */}
        <gov-box
          is-flex-box="true"
          justify="spacebetween"
          style={{
            minWidth: "780px",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "4px",
            padding: "10px 15px",
            marginBottom: "10px",
            backgroundColor: "white",
          }}
        >
          <gov-box
            is-flex-box="true"
            size={5}
            justify="spaceevenly"
            style={{
              marginRight: "10px",
              justifyContent: "space-between",
              
            }}
          >
            <div
              style={{
                marginBottom: "5px",
                minWidth: "200px",
                fontWeight: "600",
              }}
            >
              Submission Id
            </div>
            <div
              style={{
                width: "200px",
                textAlign: "left",
                minWidth: "200px",
                fontWeight: "600",

              }}
            >
              Title
            </div>
          </gov-box>

          <gov-box
            is-flex-box="true"
            size={5}
            justify="spaceevenly"
            style={{
            
              marginRight: "10px",
                justifyContent: "space-between",
                minWidth: "200px",
                paddingLeft: "10px",
                textAlign: "left",
            }}
          >
            <div
              style={{
                marginBottom: "5px",
                minWidth: "200px",
                fontWeight: "600",

              }}
            >
              Submitted
            </div>
            <div
              style={{
                width: "200px",
                textAlign: "left",
                minWidth: "200px",
                fontWeight: "600",

              }}
            >
              Status
            </div>
          </gov-box>
        </gov-box>
              
        {/* Map of service Data info */}
        {serviceData.map((service, index) => (
          <gov-box
            key={index}
            is-flex-box="true"
            justify="spacebetween"
            align="end"
            className="border-radius mb-10 white-bg"
            style={{
              justifyContent: "space-between",
              border: "1px solid #e0e0e0",
              padding: "20px 15px",
              minWidth: "780px",
            }}
          >
            {/* Left Side */}
            <gov-box
              is-flex-box="true"
              size={5}
              justify="spacebetween"
              align="end"
              classes="mr-10"
              style={{
                justifyContent: "space-between",
              }}
            >
              <gov-tooltip styles={{backgroundColor:"white"}} text="Click to copy ID" position="bottom" color="dark" hover-delay="300" size="sm" >
              <div
                style={{
                  color: "#333",
                  fontWeight: "bold",
                  minWidth: "200px",
                  paddingLeft: "10px",
                  textAlign: "left",
                  textDecoration: "underline",
                }}
              >
                {service.serviceID}
              </div>
              </gov-tooltip>

              <div
                style={{
                  color: "#666",
                  fontSize: "0.9em",
                  width: "200px",
                  textAlign: "left",
                }}
              >
                {service.title}
              </div>
            </gov-box>

            {/* Right Side */}
            <gov-box
              is-flex-box="true"
              size={5}
              justify="spaceevenly"
              align="end"
              style={{
                marginRight: "10px",
                justifyContent: "space-between",
                minWidth: "200px",
                paddingLeft: "10px",
                textAlign: "left",
              }}
            >
              <div
                className="h6 mb-5"
                style={{
                  color: "#666",
                  minWidth: "200px",

                }}
              >
                {service.submitted}
              </div>
              <div style={{ width: "200px",  minWidth: "200px", textAlign: "left" }}>
                <div
                  className=" secondary-bg info-text h6 "
                  style={{
                    "padding": "5px 15px",
                    "borderRadius": "12px",
                    "textAlign": "center",
                    "width": "110px"
                  }}
                >
                  {service.status}
                </div>
              </div>
            </gov-box>
          </gov-box>
        ))}
        </div>
      </div>
    </div>
    <div slot="Drafts">
      <div style={{ padding: "35px 20px",overflow: "scroll" }}>
        <div className="h2 black-text mb-30" style={{}}>
          Total: {serviceData.length}
        </div>
        <gov-table
          headings='["ServiceID","Title","Submitted","Status"]'
          row-actions='[{"label":"Continue Application","action":"continue"},{"label":"Delete","action":"delete"}]'
          data='[
            ["67dc937c01d4063f","Formbuilder Test Service","21 March 2025","Submitted"],
            ["b2c8e4f9a1d5c6b7","User Registration Service","22 March 2025","Pending"],
            ["c3d9f5a2e6b4h8j1","Payment Processing","23 March 2025","In Progress"],
            ["d4e7f2g9c5a3k6l2","Support Ticket System","24 March 2025","Resolved"],
            ["e5h6i3j7d8b2m9n4","Document Management","25 March 2025","Closed"],
            ["f6k4l1m5n2p7q3r8","Employee Onboarding","26 March 2025","Submitted"],
            ["g7m2n9p4q6r1s5t3","Procurement System","27 March 2025","Pending"],
            ["h8n3p7q5r2s9t6u4","Training Request","28 March 2025","In Progress"],
            ["i9p5q1r8s3t7u2v5","Leave Management","29 March 2025","Resolved"],
            ["j1q6r3s9t4u5v8w2","Asset Tracking","30 March 2025","Closed"],
            ["k2r7s4t1u6v9w3x5","Performance Review","31 March 2025","Submitted"],
            ["l3s8t2u7v1w4x6y9","Expense Reporting","01 April 2025","Pending"],
            ["m4t9u3v2w5x7y1z6","Customer Feedback","02 April 2025","In Progress"],
            ["n5u1v4w6x8y2z3a7","IT Support Request","03 April 2025","Resolved"],
            ["o6v2w9x3y5z4a1b8","Recruitment Portal","04 April 2025","Closed"]
        ]'
        ></gov-table>
      </div>
    </div>
  </gov-tabs>
  );
}