import { useState, useEffect } from "react";
import SubmissionsPage from "./Custom/ApplicationsPage";
import MainLayout from "./Custom/MainLayout";

export default function Applications() {
  
  return (
    <MainLayout
      showLoginToaster={true}
      toasterHeader="Success!"
      toasterText="You navigated to the applications page!"
      toasterVarient="success"
      toasterAnimation="zoomInRight"
    >
      <gov-row style={{ paddingTop: "15px" }}>
        <gov-breadcrumb variant="no-background"></gov-breadcrumb>
      </gov-row>
      <div style={{ padding: "0px 5vw" }}>
        {/* <SubmissionsPage/> */}
      <SubmissionsPage></SubmissionsPage>
      </div>
    </MainLayout>
  );
}
