import { useState, useEffect } from "react";
import MainLayout from "./Custom/MainLayout";

export default function Components() {
  const [showToaster, setShowToaster] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [switchState, setSwitchState] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("revenue");

  // Sample data
  const performanceData = [
    { name: "Jan", revenue: 4000, users: 2400, engagement: 2400 },
    { name: "Feb", revenue: 3000, users: 1398, engagement: 2210 },
    { name: "Mar", revenue: 2000, users: 9800, engagement: 2290 },
    { name: "Apr", revenue: 2780, users: 3908, engagement: 2000 },
    { name: "May", revenue: 1890, users: 4800, engagement: 2181 },
  ];
  const bubbleChartData = {
    datasets: [
      {
        label: "Bubble Dataset",
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 99, 132)",
        ],
        data: [
          { x: 1, y: 15000, r: 40 },
          { x: 2, y: 20000, r: 15 },
          { x: 3, y: 18000, r: 50 },
          { x: 4, y: 22000, r: 18 },
          { x: 2, y: 10000, r: 60 },
          { x: 0.5, y: 10000, r: 10 },
          { x: 1, y: 5000, r: 15 },
        ],
      },
    ],
  };

  // Polar Area Chart Data
  const polarAreaChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue",
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
        data: [15000, 20000, 18000, 22000],
      },
    ],
  };

  // Bubble Chart Options
  const bubbleChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        beginAtZero: true,
      },
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  // Polar Area Chart Options
  const polarAreaChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };
  useEffect(() => {}, []);

  return (
      <MainLayout showLoginToaster={true}toasterHeader="Slow Down!" toasterText="This is the last page!" toasterVarient="info" toasterAnimation="backInRight">
        <gov-row style={{ height: "10vh", paddingTop: "15px" }}>
          <gov-breadcrumb></gov-breadcrumb>
        </gov-row>
        <div style={{padding: "10px" }}>
          <div className="bg-gray-100 min-h-screen p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Performance Overview */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
                <gov-box is-flex-box="false" className="spaceitems-center mb-4">
                  <h2 className="text-xl font-semibold">Performance Metrics</h2>
                  <gov-row gap="15px" className="mb-10">
                   
                  </gov-row>
                </gov-box>

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

                <div className="bg-gray-100 min-h-screen p-6 " >
                  <gov-row className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bubble Chart */}
                    <div className="bg-white rounded-lg shadow-md p-6" style={{width:'45%'}}>
                      <h2 className="text-xl font-semibold mb-4">
                        Bubble Chart Analysis
                      </h2>
                      <div className="h-96">
                      <gov-chart type="bubble"
data='{"datasets":[{"label":"Bubble Dataset","backgroundColor":["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 99, 132, 0.5)"],"borderColor":["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(255, 99, 132)"],"data":[{"x":1,"y":15000,"r":40},{"x":2,"y":20000,"r":15},{"x":3,"y":18000,"r":50},{"x":4,"y":22000,"r":18},{"x":2,"y":10000,"r":60},{"x":0.5,"y":10000,"r":10},{"x":1,"y":5000,"r":15}]}]}'
options='{"responsive":true,"plugins":{"legend":{"display":true,"position":"top"}},"scales":{"x":{"type":"linear","position":"bottom","beginAtZero":true},"y":{"type":"linear","beginAtZero":true}}}'
>
</gov-chart>
                      </div>
                    </div>

                    {/* Polar Area Chart */}
                    <div className="bg-white rounded-lg shadow-md p-6" style={{width:'45%'}}>
                      <h2 className="text-xl font-semibold mb-4">
                        Quarterly Revenue Distribution
                      </h2>
                      <div className="h-96">
                        <gov-chart
                          data={polarAreaChartData}
                          options={polarAreaChartOptions}
                        ></gov-chart>
                      </div>
                    </div>
                  </gov-row >
                </div>
              
              </div>

              {/* Controls and Interactions */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                <h2 className="text-xl font-semibold mb-4">
                  Dashboard Controls
                </h2>

                {/* Slider */}
                <gov-slider
                  onChange={(e) => setSliderValue(Number(e.target.value))}
                  min="0"
                  max="100"
                  step="1"
                  label="Sensitivity"
                  value={sliderValue}
                ></gov-slider>        
                {/* Progress Indicator */}
                <gov-progress-bar
                  progress={sliderValue}
                  label="Project Completion"  
                  variant="primary"
                  type="linear"
                  animation-delay=""
                  animation=""
                  animation-speed=""
                ></gov-progress-bar>
              </div>
            </div>
          </div>

          {/*accordian*/}
          <p className="h1">Dashboard Breakdown</p>
      <gov-row>
        <gov-accordion
          open-index="3"
          animation-delay="2s"
          animation=""
          animation-speed="slow"
        >
          <gov-accordion-item title="Performance Metrics Overview">
            Dive into our comprehensive performance tracking system. This section allows you to monitor key metrics including revenue, user growth, and engagement levels. 
            Use the comparison mode switcher to toggle between different view perspectives and select specific metrics of interest using the chip-based navigation.
          </gov-accordion-item>

          <gov-accordion-item title="Visual Data Representations">
            Explore advanced data visualization techniques through our interactive charts:
            - Bubble Chart: Analyze complex data relationships with a multi-dimensional view showing correlations between different performance indicators.
            - Polar Area Chart: Visualize quarterly revenue distribution, providing a clear breakdown of financial performance across different periods.
          </gov-accordion-item>

          <gov-accordion-item title="Dashboard Controls and Interactions">
            Customize your dashboard experience with intuitive control mechanisms:
            - Sensitivity Slider: Adjust the granularity of data representation.
            - View Mode Radio Buttons: Switch between compact, detailed, and extended views.
            - Progress Indicator: Track project completion and key performance metrics in real-time.
          </gov-accordion-item>

          <gov-accordion-item title="Layout and Navigation">
            Navigate seamlessly through our comprehensive dashboard:
            - Top Bar: Quick access to Home, Profile, and Settings.
            - Sidebar: Easy navigation to key sections including Dashboard, Applications, and Components.
            - User Profile: Personalized access with avatar and user-specific menu options.
          </gov-accordion-item>
        </gov-accordion>
      </gov-row>
        </div>
      </MainLayout>
  );
}
