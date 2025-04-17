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
            zIndex: 1000,
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
        top-Bar-Items='[
         {"label": "", "href": "/dashboard", "icon": "bell"},
         {"label": "", "href": "/dashboard" , "icon": "infoCircle"},
         {"label": "", "href": "/dashboard", "icon": "userCircle"}
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
      >
        <div style={{ height: "100vh", overflowY: "auto", padding: "10px 0px" }}>
          {children}
        </div>
      </gov-layout>
    </div>
  );
}