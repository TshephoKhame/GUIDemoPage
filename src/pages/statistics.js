import { useState } from "react";
import MainLayout from "./Custom/MainLayout";

export default function Components() {
  const [sliderValue, setSliderValue] = useState(40);
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  return (
    <MainLayout
      showLoginToaster
      toasterHeader="Dashboard Overview"
      toasterText="Explore your key performance indicators"
      toasterVarient="info"
      toasterAnimation="fadeIn"
    >
      <div className="p-6 bg-gray-50 min-h-screen space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <gov-breadcrumb animation="fadeIn" animationDelay="2s" animationSpeed="slower" />
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <h2 className="text-lg font-semibold text-gray-700">Adjust Date:</h2>
          <gov-date-time-picker />
        </div>
     

        {/* Row 1: Preferences + Sensitivity */}
<div 
   style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '40px'
  }}
 
>
<gov-card show-button='false'>
        <h2 className="text-lg font-semibold text-gray-700">Preferences</h2>
          <gov-radiobutton
            heading="Choose Project"
            subtitle="Select one"
            options='[
              {"value": "1", "label": "Geo Location"},
              {"value": "2", "label": "Time Stamps"},
              {"value": "3", "label": "Simulations"}
            ]'
          />
        </gov-card>

        <gov-card show-button='false'>
            <h2 className="text-lg font-semibold text-gray-700">Sensitivity</h2>
            <gov-switcher is-on show-label size="small">
              <span slot="on-icon">🌞</span>
              <span slot="off-icon">🌚</span>
            </gov-switcher>
              <gov-slider
              onChange={(e) => setSliderValue(Number(e.target.value))}
              min="0"
              max="100"
              step="1"
              label="Sensitivity"
              value={sliderValue}
            />
            <gov-progress-bar
              progress={sliderValue}
              label="Completion"
              variant="primary"
              type="linear"
            />
        </gov-card>
 
</div>

{/* Row 2: Metric */}
<div className="mt-6">
  <div className="w-full bg-white rounded-2xl p-6 shadow space-y-4">
    <h2 className="text-lg font-semibold text-gray-700">Metric</h2>
    <div className="flex gap-10 flex-wrap">
   
    <gov-row
      align="end"
      justify="start"
      gap="10px"
      reverse="false"
      classes="mb-4"
    >
      {["revenue", "users", "engagement"].map((metric) => (
        <gov-chip
          onClick={() => setSelectedMetric(metric)}
          id={metric}
          label={metric}
          selected="false"
          disabled="false"
        ></gov-chip>
      ))}
      </gov-row>
    </div>
  </div>
</div>



        {/* Charts Row */}
        <div className="flex flex-wrap gap-6">
          {/* Bubble Chart */}
          <div className="flex-1 min-w-[400px] bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Bubble Chart</h2>
            <p className="text-sm text-gray-500 mb-2">Correlations & outliers with impact sizes.</p>
            <div className="h-96">
              <gov-chart
                type="bubble"
                data='{"datasets":[{"label":"Bubble Dataset","backgroundColor":["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],"borderColor":["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(153, 102, 255)"],"data":[{"x":1,"y":15000,"r":40},{"x":2,"y":20000,"r":15},{"x":3,"y":18000,"r":50},{"x":4,"y":22000,"r":18}]}]}'
                options='{"responsive":true,"plugins":{"legend":{"display":true,"position":"top"}},"scales":{"x":{"type":"linear","beginAtZero":true},"y":{"type":"linear","beginAtZero":true}}}'
              />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 min-w-[400px] bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Quarterly Revenue</h2>
            <p className="text-sm text-gray-500 mb-2">Revenue across quarters.</p>
            <div className="h-96">
              <gov-chart
                data='{"labels":["Q1","Q2","Q3","Q4"],"datasets":[{"label":"Revenue","backgroundColor":["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],"borderColor":["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(153, 102, 255)"],"data":[15000,20000,18000,22000]}]}'
                options='{"responsive":true,"plugins":{"legend":{"display":true,"position":"top"}}}'
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
