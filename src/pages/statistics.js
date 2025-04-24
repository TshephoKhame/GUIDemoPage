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
      <div style={{ padding: "2rem", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "2rem" }}>
          <div>
            <gov-breadcrumb />
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

        {/* Filters and Settings */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          {/* Inventory Filters */}
          <gov-card show-button="false" className='border bw-1 border-radius-lg shadow'>
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

          {/* Real-Time Settings */}
          <gov-card show-button="false" className='border bw-1 border-radius-lg shadow '>
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
        </div>

        {/* Inventory Overview Cards */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937", marginBottom: "1.5rem" }}>Inventory Overview</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", marginBottom: "2rem" }}>
            
            <gov-card show-button="false" className='border bw-1 border-radius-lg shadow '>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151" }}>Items in Stock</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#16a34a" }}>1,240</p>
                <gov-progress-bar progress="85" label="Stocked" variant="success" type="linear" />
              </div>
            </gov-card>

            <gov-card show-button="false" className='border bw-1 border-radius-lg shadow '>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151" }}>Low Stock</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#eab308" }}>96</p>
                <gov-progress-bar progress="45" label="Caution" variant="warning" type="linear" />
              </div>
            </gov-card>

            <gov-card show-button="false" className='border bw-1 border-radius-lg shadow '>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151" }}>Out of Stock</h3>
                <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#dc2626" }}>24</p>
                <gov-progress-bar progress="10" label="Critical" variant="danger" type="linear" />
              </div>
            </gov-card>

          </div>

          {/* Chart Section */}
          {/* Chart Section */}
{/* Standalone Pie Chart Section */}
<div
  style={{
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    marginTop: "16px",
    maxWidth: "700px"
  }}
>
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

</div>


        </div>

      </div>
    </MainLayout>
  );
}
