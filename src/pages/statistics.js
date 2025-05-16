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
      <div style={{ padding: "2rem", backgroundColor: "#f9fafb" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "2rem" }}>
          <div>
            <gov-breadcrumb variant="no-background" />
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

        <div style={{ gap: "10px" }}>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>Inventory Overview</h2>

            {/* Inventory Overview Cards */}
            <div className="d-flex flex-wrap" style={{ justifyContent: "space-between", gap: "20px" }}>
              {[
                { title: "Items in Stock", value: "1,240", color: "#16a34a", progress: 85, label: "Stocked", variant: "success" },
                { title: "Low Stock", value: "96", color: "#eab308", progress: 45, label: "Caution", variant: "warning" },
                { title: "Out of Stock", value: "24", color: "#dc2626", progress: 16, label: "Critical", variant: "danger" },
              ].map((item, idx) => (
                <div key={idx} style={{ minWidth: "303px", flex: "1 1 30%" }}>
                  <div className='border bw-1 border-radius-lg shadow w-100'>
                    <div style={{ padding: "1rem" }}>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p style={{ fontSize: "2rem", fontWeight: "bold", color: item.color }}>{item.value}</p>
                      <gov-progress-bar
                        progress={item.progress}
                        label={item.label}
                        variant={item.variant}
                        type="linear"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom half Cards */}
            <div className="d-flex flex-wrap mt-20" style={{ gap: "20px" }}>
              {/* Stock Distribution */}
              <div style={{ width: "100%" }}>
                <div className='border bw-1 border-radius-lg shadow w-100' style={{ padding: "1rem", overflowY: "auto" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>Stock Distribution</h3>
                  <p style={{ fontSize: "0.875rem", color: "#6b7280", marginBottom: "1rem" }}>Breakdown by category</p>
                  <div className="d-flex flex-wrap" style={{ gap: "20px", justifyContent: "space-around" }}>
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
                      style={{ height: "100%", width: "48%", minWidth: "450px" }}
                    />
                    <gov-chart
                      type="bar"
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
                      style={{ height: "100%", width: "48%", minWidth: "450px" }}
                    />
                  </div>
                </div>
              </div>

              {/* Filters and Settings */}
              <div className="d-flex flex-wrap mt-20" style={{ gap: "20px", width: "100%" }}>
                <div style={{ flex: "2 1 66%", gap: "20px" }}>
                  <div className='border bw-1 border-radius-lg shadow w-100'>
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
                  </div>
                </div>
                <div style={{ flex: "1 1 30%" }}>
                  <div className='border bw-1 border-radius-lg shadow w-100'>
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
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
