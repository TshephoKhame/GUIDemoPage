import { useState, useEffect } from "react";
import SubmissionsPage from "./Custom/ApplicationsPage";
import MainLayout from "./Custom/MainLayout";

export default function Applications() {
  const [showToaster, setShowToaster] = useState(true);

  return (
      <MainLayout showLoginToaster={true} toasterHeader="Success!" toasterText="You navigated to the applications page!" toasterVarient="success" toasterAnimation="zoomInRight">
        <gov-row style={{ height: "10vh", paddingTop: "15px" }}>
          <gov-breadcrumb></gov-breadcrumb>
        </gov-row>
        <div style={{ padding: "10px" }}>
          {/* <SubmissionsPage/> */}
          <gov-tabs tab-list='["Submitted","Drafts"]' active-tab="Submitted">
            <div slot="Submitted">
              <div style={{ padding: "35px 20px" }}>
                <div
                  className="h2"
                  style={{
                    marginBottom: "15px",
                    color: "#666",
                  }}
                >
                  Total: 15
                </div>

          {/* <gov-box
                is-flex-box="true"
                justify="spacebetween"

                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
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
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      style={{
                        color: "#333",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      67e2c9c988b5db7714c0
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.9em",
                      }}
                    >
                      Formbuilder Test Service
                    </div>
                  </gov-box>
                      
                  <gov-box
                    is-flex-box="true"
                    size={5}
                    justify="spaceevenly"
                    style={{
                      marginRight: "10px",
                      justifyContent: 'space-between'
                    }}
                  >
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.8em",
                        marginBottom: "5px",
                      }}
                    >
                      '25 Mar 2025 - 17:24'
                    </div>
                    <div
                      style={{
                        backgroundColor: "#e6f2ff",
                        color: "#0070f3",
                        padding: "3px 8px",
                        borderRadius: "12px",
                        fontSize: "0.7em",
                        fontWeight: "600",
                      }}
                    >
                      Submitted
                    </div>
                  </gov-box>
                </gov-box> */}
                <gov-table
                  headings='["ServiceID","Title","Submitted","Status"]'
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
            <div slot="Drafts">
              <div style={{ padding: "35px 20px" }}>
                <div
                  className="h2"
                  style={{
                    marginBottom: "15px",
                    color: "#666",
                  }}
                >
                  Total: 15
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
        </div>
      </MainLayout>
  );
}
