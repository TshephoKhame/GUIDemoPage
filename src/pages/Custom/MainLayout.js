import { useState } from "react";

export default function MainLayout({ children, showLoginToaster = false,toasterHeader="",toasterText="",toasterVarient ="",toasterAnimation=""}) {
  const [showToaster, setShowToaster] = useState(showLoginToaster);
  return (
    <div style={{ position: "relative" }}>
      {showToaster && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 1000000,
            width: "400px",
          }}
        >
          <gov-alert
            header= {toasterHeader}
            label={toasterText}
            variant={toasterVarient}
            animation={toasterAnimation}
            onClose={() => setShowToaster(false)}
          ></gov-alert>
        </div>
      )}
      <gov-layout
        layoutlogo="./assets/1gov.png"
        top-Bar-Items='[
        
        ]'
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
            {"icon": "search", "size": "24px", "variant": "primary", "action": "searchFunction"},
            {"icon": "bell", "size": "24px", "variant": "secondary", "action": "bellFunction"},
            {"icon": "heart", "size": "24px", "variant": "danger", "action": "settingsFunction"}
          ]'
      >
        <div style={{ padding: "10px 0px" }}>
          {children}
        </div>
      </gov-layout>
    </div>
  );
}