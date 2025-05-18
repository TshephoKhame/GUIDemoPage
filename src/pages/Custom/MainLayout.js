import { useState, useEffect, useRef  } from "react";
import { useRouter } from "next/navigation";

export default function MainLayout({ children, showLoginToaster = false,toasterHeader="",toasterText="",toasterVarient ="",toasterAnimation=""}) {
  const [showToaster, setShowToaster] = useState(showLoginToaster);
  const alert = useRef(null);
  const router = useRouter();

  
   useEffect(() => {
      const openAlert = alert.current;
      if(openAlert){
         setTimeout(() =>  openAlert.close(), 10000);
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
    }, []);
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
          header= {toasterHeader}
          label={toasterText}
          variant={toasterVarient}
          animation={toasterAnimation}
          onClose={() => setShowToaster(false)}
        ></gov-alert>

      )}
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
        <div style={{}}>
          {children}
        </div>
      </gov-layout>
    </div>
  );
}