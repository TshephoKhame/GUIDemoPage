import { useState } from "react";
import MainLayout from "./Custom/MainLayout";

export default function Components() {
  const [sliderValue, setSliderValue] = useState(20);
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  return (
    <MainLayout
      showLoginToaster={true}
      toasterHeader="Dashboard Overview"
      toasterText="Explore your key performance indicators"
      toasterVarient="info"
      toasterAnimation="fadeIn"
    >
      <div className="p-6 bg-gray-50 min-h-screen space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <gov-breadcrumb animation="fadeIn" animationDelay="2s" animationSpeed="slower"></gov-breadcrumb>
            <h1 className="text-3xl font-bold text-gray-800">Statistics Dashboard</h1>
          </div>
          <gov-date-time-picker></gov-date-time-picker>
        </div>

        {/* Introductory Context */}
        <div className="text-gray-600 max-w-3xl">
          <p className="text-base">
            Welcome to your data insights hub. Use the tools and charts below to analyze user engagement,
            revenue trends, and operational metrics. Adjust parameters to explore different dimensions of your data.
          </p>
        </div>

        {/* KPI Switch & Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">User Preferences</h2>
            <p className="text-sm text-gray-500">Select interface options and toggle themes to personalize your dashboard experience.</p>
            <gov-radiobutton heading="Choose Your Current Project" subtitle="Choose one of the following options" options='[
      {"value": "1", "label": "Geo Location"},
      {"value": "2", "label": "Time Stamps"},
      {"value": "3", "label": "Simulations"}
    ]'>
    </gov-radiobutton>
    <h2 className="text-lg font-semibold text-gray-700">Data Rendering</h2>
            <gov-switcher
              is-on="true"
              show-label="true"
              has-icons="false"
              size="small"
            >
              <span slot="on-icon">🌞</span>
              <span slot="off-icon">🌚</span>
            </gov-switcher>
          </div>

          {/* Slider and Progress */}
          <div className="bg-white rounded-2xl p-6 shadow space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Project Sensitivity</h2>
            <p className="text-sm text-gray-500">Use the slider to simulate or reflect the current sensitivity level for your active initiatives.</p>
            <gov-slider
              onChange={(e) => setSliderValue(Number(e.target.value))}
              min="0"
              max="100"
              step="1"
              label="Sensitivity"
              value={sliderValue}
            ></gov-slider>
            <gov-progress-bar
              progress={sliderValue}
              label="Completion Rate"
              variant="primary"
              type="linear"
            ></gov-progress-bar>
          </div>

          {/* Metric Selector */}
          <div className="bg-white rounded-2xl p-6 shadow space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Performance Metric</h2>
            <p className="text-sm text-gray-500">Choose which metric you'd like to emphasize in the charts below.</p>
            <div className="flex gap-2">
              {[
                "revenue",
                "users",
                "engagement"
              ].map((metric) => (
                <gov-chip
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  id={metric}
                  label={metric}
                  selected={selectedMetric === metric ? "true" : "false"}
                ></gov-chip>
              ))}
            </div>
          </div>
        </div>

        {/* Data Visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Bubble Chart Analysis</h2>
            <p className="text-sm text-gray-500 mb-2">Visualize correlations and outliers across dimensions like user activity and revenue with bubble sizes representing impact.</p>
            <div className="h-96">
              <gov-chart
                type="bubble"
                data='{"datasets":[{"label":"Bubble Dataset","backgroundColor":["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 99, 132, 0.5)"],"borderColor":["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(255, 99, 132)"],"data":[{"x":1,"y":15000,"r":40},{"x":2,"y":20000,"r":15},{"x":3,"y":18000,"r":50},{"x":4,"y":22000,"r":18},{"x":2,"y":10000,"r":60},{"x":0.5,"y":10000,"r":10},{"x":1,"y":5000,"r":15}]}]}'
                options='{"responsive":true,"plugins":{"legend":{"display":true,"position":"top"}},"scales":{"x":{"type":"linear","position":"bottom","beginAtZero":true},"y":{"type":"linear","beginAtZero":true}}}'
              ></gov-chart>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Quarterly Revenue Distribution</h2>
            <p className="text-sm text-gray-500 mb-2">See how revenue is distributed across the fiscal quarters to track seasonal trends and performance shifts.</p>
            <div className="h-96">
              <gov-chart
                data='{"labels":["Q1","Q2","Q3","Q4"],"datasets":[{"label":"Revenue","backgroundColor":["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)"],"borderColor":["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(153, 102, 255)"],"borderWidth":1,"data":[15000,20000,18000,22000]}]}'
                options='{"responsive":true,"plugins":{"legend":{"display":true,"position":"top"}}}'
              ></gov-chart>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}