import { useState, useEffectk, useRef } from "react";
import ServiceCatagories from "./Custom/ServicePage";
import MainLayout from "./Custom/MainLayout";

export default function DashboardHome() {
  
  return (
    <MainLayout 
      showLoginToaster={true} 
      toasterHeader="Welcome!" 
      toasterText="You navigated to the dashboard!!" 
      toasterVarient="success" 
      toasterAnimation="zoomInRight"
    >
      <div className="p-10 d-flex flex-wrap">
        <gov-box size="12" xl="9" lg="12" md="12">
          <ServiceCatagories />
        </gov-box>
        <gov-box size="12" xl="3" lg="12" md="12" style={{padding: "0px 0px 0px 20px" }}>
          <gov-calender></gov-calender>
        </gov-box>
      </div> 
    
    </MainLayout>
  );
  


}