import { useState } from "react";
import MainLayout from "./Custom/MainLayout";

export default function InventoryDashboard() {
  const [sliderValue, setSliderValue] = useState(40);

  return (
    <MainLayout
      showLoginToaster
      toasterHeader="Inventory Center"
      toasterText="Track inventory performance in real-time"
      toasterVarient="info"
      toasterAnimation="fadeIn"
    >
      <gov-box size="12" style={{ padding: "2rem", backgroundColor: "#f9fafb"}}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "2rem" }}>
          <div>
            <gov-breadcrumb variant="no-background"/>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.5rem", color: "#1f2937" }}>Inventory</h1>
          </div>

          {/* Date Range Filter */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "0.875rem", marginBottom: "0.25rem", color: "#374151" }}>From</label>
              <gov-date-time-picker />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontSize: "0.875rem", marginBottom: "0.25rem", color: "#374151" }}>To</label>
              <gov-date-time-picker />
            </div>
          </div>
        </div>

       

        <gov-box size="12" lg="12" md="12" sm="12" styles={{ gap:"10px"}}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>Inventory Overview</h2>
            
            {/* Inventory Overview Cards */}
            <div className="d-flex flex-wrap" style={{ justifyContent: "space-between" }}>

              <gov-box size="4" xs="4" lg="4" md="12" sm="12" styles={{ overflow: "hidden" }}>
                <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                  <div style={{ padding: "1rem" }}>
                  <h5 className="fw-bold" style={{}}>Items in Stock</h5>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a" }}>1,240</p>
                    <gov-progress-bar progress="85" label="Stocked" variant="success" type="linear" />
                  </div>
                </gov-card>
              </gov-box>

              <gov-box size="4" xs="4" lg="4" md="12" sm="12" styles={{ overflow: "hidden" }}>
                <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                  <div style={{ padding: "1rem" }}>
                    <h5 className="fw-bold" style={{}}>Low Stock</h5>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#eab308" }}>96</p>
                    <gov-progress-bar progress="45" label="Caution" variant="warning" type="linear" />
                  </div>
                </gov-card>
              </gov-box>

              <gov-box size="4" xs="4" lg="4" md="12" sm="12" styles={{ overflow: "hidden" }}>
                <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                  <div style={{ padding: "1rem" }}>
                  <h5 className="fw-bold" style={{}}>Out of Stock</h5>
                    <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#dc2626" }}>24</p>
                    <gov-progress-bar progress="16" label="Critical" variant="danger" type="linear" />
                  </div>
                </gov-card>
              </gov-box>

            </div>

            {/* Bottom half Cards */}
            <div className="d-flex flex-wrap mt-20" style={{gap: "20px"}}>
              {/* Standalone Pie Chart Section */}
              <gov-box size="12" lg="12" md="12" sm="12" style={{}}>
                <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        color: "#374151",
                        marginBottom: "0.5rem"
                      }}
                    >
                      Stock Distribution
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem" }}>
                      Breakdown by category
                    </p>                     
                    <gov-chart
                      type="pie"
                      data='{
                        "labels":["In Stock","Low Stock","Out of Stock"],
                        "datasets":[{
                          "label":"Inventory",
                          "backgroundColor":["#4ade80","#facc15","#f87171"],
                          "data":[1240,96,24]
                        }]
                      }'
                              options='{
                        "responsive": true,
                        "maintainAspectRatio": false,
                        "plugins": {
                          "legend": {
                            "position": "bottom"
                          }
                        }
                      }'
                      style={{ height: "100%", width: "100%" }}
                    />
                </gov-card>               
              </gov-box>

              {/* Filters and Settings */}
              <gov-box size="12" lg="12" md="12" sm="12" gap="20px" className="d-flex flex-wrap mt-20">
                  <gov-box size="8" lg="8" md="8" sm="12" styles={{ gap:"20px"}}>
                    {/* Real-Time Settings */}
                    <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                      <div style={{ padding: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#374151", marginBottom: "1rem" }}>Real-Time Settings</h2>
                        <div style={{ marginBottom: "1.5rem" }}>
                          <gov-switcher is-on show-label size="small">
                            <span slot="on-icon">🔄</span>
                            <span slot="off-icon">⏸️</span>
                          </gov-switcher>
                        </div>
                        <gov-slider
                          onChange={(e) => setSliderValue(Number(e.target.value))}
                          min="0"
                          max="100"
                          step="1"
                          label="Alert Sensitivity"
                          value={sliderValue}
                        />
                      </div>
                    </gov-card>
                  </gov-box>
                  <gov-box size="3" lg="3" md="3" sm="12" >
                    {/* Inventory Filters */}
                    <gov-card show-button="false" className='border bw-1 border-radius-lg shadow w-100'>
                      <div style={{ padding: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#374151", marginBottom: "1rem" }}>Inventory Filters</h2>
                        <gov-radiobutton
                          heading="Product Category"
                          subtitle="Filter inventory by category"
                          options='[
                            {"value": "electronics", "label": "Electronics"},
                            {"value": "furniture", "label": "Furniture"},
                            {"value": "office", "label": "Office Supplies"}
                          ]'
                        />
                      </div>
                    </gov-card>
                  </gov-box>
                  
              </gov-box>
            </div>

          </div>
        </gov-box>
        
      </gov-box>
    </MainLayout>
  );
}
