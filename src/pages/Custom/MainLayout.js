import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function MainLayout({ children, showLoginToaster = false, toasterHeader = "", toasterText = "", toasterVarient = "", toasterAnimation = "" }) {
  const [showToaster, setShowToaster] = useState(showLoginToaster);
  const alert = useRef(null);
  const router = useRouter();
  const popup = useRef(null);

  function openPopup() {
    console.log("Open Popup clicked");
    if (popup.current) {
      popup.current.openModal();
    }
  }

  // Expose openPopup globally so it can be called from children components
  useEffect(() => {
    // Assign the function itself, not its return value
    window.openPopup = openPopup;
    
    return () => {
      // Clean up when component unmounts
      delete window.openPopup;
    };
  }, []);
  
  useEffect(() => {
    const openAlert = alert.current;
    if(openAlert){
      setTimeout(() => openAlert.close(), 10000);
    }
    
    // Define functions directly on the window object
    window.infoFunction = function() {
      console.log('info button clicked!');
      window.alert('info clicked!');
    };

    window.bellFunction = function() {
      console.log('Bell button clicked!');
      window.alert('Bell clicked!');
    };

    window.userFunction = function() {
      console.log('user button clicked!');
      window.alert('user clicked!');
    };

    window.logout = function() {
      console.log('logout');
      router.push("/");
    };
    
    return () => {
      // Clean up when component unmounts
      delete window.infoFunction;
      delete window.bellFunction;
      delete window.userFunction;
      delete window.logout;
    };
  }, [router]);

  return (
    <div style={{ position: "relative" }}>
      {showToaster && (
        <gov-alert
          ref={alert}
          style={{
            position: "fixed",
            top: "10px",
            right: "15px",
            zIndex: 1000000,
            width: "320px",
          }}
          header={toasterHeader}
          label={toasterText}
          variant={toasterVarient}
          animation={toasterAnimation}
          onClose={() => setShowToaster(false)}
        ></gov-alert>
      )}

      {/* Popup */}
      <gov-popups
        ref={popup} 
        id="modal1" 
        header="" 
        subheader="" 
        cancel-button-text="Cancel" 
        confirm-button-text="Accept Conditions & Apply" 
        show-cancel-button="true" 
        show-confirm-button="true" 
        backdrop-close="true" 
        disable-close="false"
      >
        <div style={{ padding: "0px 20px", border: "none" }}>
          <h3 style={{ textAlign: "center" }}>General Conditions</h3>
          <ul>
            <li>This service is only applicable to citizens of Botswana aged 18 years and above.</li>
            <li>The service is free of charge.</li>
            <li>Clients will undergo an assessment conducted by a Social Welfare Officer or Community Development Officer.</li>
            <li>This process will take 4 weeks before the client is given feedback.</li>
            <li>
              To be enrolled, applicants must meet the eligibility criteria specified in the 
              <strong>Revised Destitute Policy of 2002</strong>, as provided by the Ministry of Local Government and Rural Development.
            </li>
          </ul>

          <h4>Eligibility Criteria:</h4>
          <p>To be considered for this service, the applicant must:</p>
          <ul>
            <li>Possess no more than <strong>six (6) livestock units</strong>.</li>
          </ul>
        </div>    
      </gov-popups>

      <gov-layout
        layoutlogo="https://1gov.gov.bw/main-icon.png"
        show-Top-Bar-Avatar='true'
        top-Bar-Items='[]'
        sidebar-Items='[
        { "label": "Home", "link": "/dashboard", "icon": "homeOutline" },
        { "label": "Applications", "link": "/applications", "icon": "annotation" },
        { "label": "Statistics", "link": "/statistics", "icon": "adjustmentsHorizontal"},
        { "label": "Components", "link": "/components", "icon": "cashOutline" }
    ]'
        top-Bar-Username='[
      { "label": "Jakida Sam", "link": "/services", "icon": "", "subItems": 
      [
        { "label": "Development", "link": "/services/web", "icon": "" },
        { "label": "SEO", "link": "/services/seo", "icon": ""}
        ]
      }
      ]'
        show-Side-Bar-Avatar="true"
        sidebar-Username="Sam"
        avatar-Img-Url="https://picsum.photos/400/300"
        avatar-Initials="AP"
        menu-Type="site"
        icon-Buttons='[
            {"icon": "bell", "size": "24px", "variant": "primary", "action": "bellFunction"},
            {"icon": "infoCircle", "size": "24px", "variant": "primary", "action": "infoFunction"},
            {"icon": "user", "size": "24px", "variant": "primary", "action": "userFunction"},
            {"icon": "arrowLeftToBracketOutline", "size": "24px", "variant": "danger", "action": "logout"}
          ]'
      >
        <div>
          {children}
        </div>
      </gov-layout>
    </div>
  );
}