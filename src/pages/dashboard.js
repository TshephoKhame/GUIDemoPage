import { useState, useEffect } from "react";
import ServiceCatagories from "./Custom/ServicePage";
import MainLayout from "./Custom/MainLayout";

export default function DashboardHome() {

  return (
    <MainLayout showLoginToaster={true} toasterHeader="Success!" toasterText="You logged in!!" toasterVarient="success" toasterAnimation="zoomInRight">
        <div style={{ padding: "10px 0px" }}>
          <gov-row style={{}}>
            <gov-box size={10}>
              <gov-row style={{}}>
                <ServiceCatagories />
              </gov-row>
            </gov-box>

            <gov-box size={3}>
              <gov-row>
                <gov-calender></gov-calender>
              </gov-row>
            </gov-box>
          </gov-row>
        </div>
      </MainLayout>
    
  );
}
