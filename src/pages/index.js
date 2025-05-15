"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export function LoginButton(){
  const router = useRouter();

  function loginToDashboard()  {
    console.log("login");
    router.push("/dashboard");
  };

  return(
    <gov-row
    align="center"
    justify="center"
    className="mt-20 mb-8"
  >
    <div onClick={loginToDashboard}>
    <gov-button
      type-variant="button"
      size="md"
      variant="success"
      label="login"
      styles='{"padding":"20px 60px"}'
    ></gov-button>
    </div>
  </gov-row>
  );
} 

export function RegisterButton(){
  const router = useRouter();

  function registerToDashboard()  {
    console.log("login");
    router.push("/dashboard");
  };

  return(
    <gov-row
    align="center"
    justify="center"
    className="mt-20 mb-8"
  >
    <div onClick={registerToDashboard}>
    <gov-button
      type-variant="button"
      size="md"
      variant="success"
      label="login"
      styles='{"padding":"20px 60px"}'
    ></gov-button>
    </div>
  </gov-row>
  );
} 

export default function Home() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const loginDialogRef = useRef(null);
  const registrationDialogRef = useRef(null);

  useEffect(() => {
  }, []);

  const handleLoginClick = () => {
    if (loginDialogRef.current) {
      loginDialogRef.current.openModal();
    }
  };

  const handleRegistrationClick = () => {
    if (registrationDialogRef.current) {
      registrationDialogRef.current.openModal();
    }
  };
  return (
    <div

      style={{
        height: "100vh",
        background:
          " linear-gradient(0deg ,var(--kcAlternativeBlue),var(--kcBotswanaBlue))",
      }}
    >
      <gov-box
        size="12"
        align="start"
        justify="start"
        gap="10px"
        is-flex-box="false"
        classes=""
      >
        {/* Top area*/}
        <div style={{ height: "60vh" }}>
          {/*coat of arms row */}
          <gov-row
          
            align="start"
            justify="center"
            gap="10px"
            reverse="false"
            classes=""
           
            
          >
            {/*renders coat of arms image */}
            <gov-tooltip
              text="Go to https://www.gov.bw"
              position="bottom"
              color="light"
            >
              <div
                className="coat-of-arms-container"
                style={{ cursor: "pointer" }}
              ></div>
            </gov-tooltip>
          </gov-row>
          {/*Welcome page Header */}
          <gov-row
            align="start"
            justify="center"
            gap="10px"
            reverse="false"
            
             classes="header-row"
          >
            <p className="header-max white-text"> Welcome to 1Gov e-Services Portal</p>
          </gov-row>

          <gov-row
            align="start"
            justify="center"
            gap="10px"
            reverse="false"
            classes=""
          ></gov-row>
        </div>

        {/* footer */}
        <gov-row
          align="between"
          justify="start"
          gap="10px"
          reverse="false"
          classes=""
          style={{ height: "40vh", padding: "40px" }}
        >
          {/* left side of footer */}
          <gov-box
            size="6"
            align="start"
            justify="end"
            is-flex-box="true"
            classes=""
            style={{ flexDirection: "column" }}
          >
            {/* Renders play button */}
            <div className="playstore-button-image" style={{}}></div>

            {/* Contact buttons */}
            <div className="contact-container border-radius-lg" style={{}}>
              <div className="govlogo"></div>
              <gov-box is-flex-box="true" align="center">
                {" "}
                {/* align="center" */}
                <gov-box size="4" align="start">
                  <p className="white-text smaller-caption mb-5 mt-0">
                    Contact Us
                  </p>
                  <gov-row gap="15px" align="center" justify="start">
                    <gov-tooltip
                      text="e-support@gov.bw"
                      position="bottom"
                      color="black"
                    >
                      <gov-icon
                        name="envelope"
                        size="md"
                        variant="white"
                      ></gov-icon>
                    </gov-tooltip>
                    <gov-tooltip
                      text="+26773996013"
                      position="bottom"
                      color="black"
                    >
                      <gov-icon
                        name="phone"
                        size="md"
                        variant="white"
                      ></gov-icon>
                    </gov-tooltip>
                  </gov-row>
                </gov-box>
                <div className="border bw-2 border-white border-radius-lg vertical-divider"></div>
                <gov-box style={{ marginLeft: "12px" }} size="7" align="start">
                  <p className="white-text smaller-caption mb-5 mt-0">Social</p>
                  <gov-row gap="15px" align="center" justify="start">
                    <gov-tooltip
                      text="https://www.facebook.com/BotswanaGovernment/"
                      position="bottom"
                     color="light"
                    >
                      <gov-icon
                        name="facebook"
                        size="md"
                        variant="white"
                      ></gov-icon>
                    </gov-tooltip>

                    <gov-tooltip
                      text="https://x.com/BWGovernment"
                      position="bottom"
                      color="light"
                    >
                      <gov-icon name="X" size="md" variant="white"></gov-icon>
                    </gov-tooltip>
                    <gov-tooltip
                      text="https://www.instagram.com/bwgov/"
                      position="bottom"
                   
                       color="light"
                    >
                      <gov-icon
                        name="instagram"
                        size="md"
                        variant="white"
                      ></gov-icon>
                    </gov-tooltip>
                  </gov-row>
                </gov-box>
              </gov-box>
            </div>

            {/* app version */}
            <div className="white-text smaller-caption" style={{}}>
              © 2025 1Gov1Citizen Portal v30.5
            </div>
          </gov-box>

          {/* Space inbetween */}
          <gov-box size="auto"></gov-box>

          {/* Login and Registration Buttons */}
          <gov-box
            size="3"
            align="end"
            justify="end"
            gap="15px"
            is-flex-box="true"
            classes=""
          >

            <gov-button
              onClick={handleLoginClick}
              type-variant="button"
              size="xxl"
              variant="white"
              label="Login"
              styles='{"padding":"20px 60px"}'
            ></gov-button>
            <gov-button
              onClick={handleRegistrationClick}
              type-variant="button"
              size="xxl"
              variant="black"
              label="Register"
              styles='{"padding":"20px 60px"}'
            ></gov-button>
          </gov-box>
        </gov-row>

        {/* model for loging */}
        <gov-popups ref={loginDialogRef} id="LoginDialog" styles='{"width":"570px","border-radius":"15px"}' header="Login" subheader="Complete the form below to access your account." cancel-button-text="Cancel" confirm-button-text="Confirm" show-cancel-button="false" show-confirm-button="false" backdrop-close="true" disable-close="false">
          <div style={{ padding: "0px 20px", border: "none" }}>
            <hr style={{ borderTop: "1px solid rgb(217 217 217)", borderRadius: "5px" }}></hr>
            <span className="h6" style={{ fontWeight: "700" }}>Choose Login Options</span>
            <gov-tabs
              tab-list='["1GovID","Phone","Email"]'
              active-tab="1GovID"
              body-styles='{"border":"none","box-shadow": "none","border-right":"none","padding":"20px 0px"}'
              styles='{ "border": "none" }'
              header-styles='{"align-items": "center","height":"55px","border":"none","border-radius":"0px","border-right":"none","marginTop":"10px"}'
              active-button-styles='{ "color": "white", "border": "none","height":"35px" }'
              inactive-button-styles='{"color":"gray","border":"none","height":"35px"}'
            >
              <div slot="1GovID">
                <hr style={{ borderTop: "1px solid rgb(217 217 217)", borderRadius: "5px" }}></hr>

                <div style={{ padding: "10px 30px 80px" }}>
                  <gov-input
                    label="1Gov ID"
                    type="text"
                    placeholder="Enter your 1 Gov ID"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="profileCard"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <div style={{ padding: "8px" }}></div>
                  <gov-input
                    label="Password"
                    type="password"
                    placeholder="Enter your Password"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="lock"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>

                  <LoginButton />
                </div>
              </div>
              <div slot="Phone">
                <div style={{ padding: "10px 30px 80px" }}>
                  <gov-input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="phone"
                    validation-pattern="^267\d{8}$"
                    required="true"
                    error-message="Phone number must start with 267 and be 11 digits long (e.g., 26777380956)"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <div style={{ padding: "8px" }}></div>
                  <gov-input
                    label="Password"
                    type="password"
                    placeholder="Enter your Password"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="lock"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>

                  <LoginButton />
                </div>
              </div>
              <div slot="Email">
                <div style={{ padding: "10px 30px 80px"  }}>
                  <gov-input
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="envelope"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <div style={{ padding: "8px" }}></div>
                  <gov-input
                    label="Password"
                    type="password"
                    placeholder="Enter your Password"
                    value=""
                    disabled="false"
                    is-valid="true"
                    is-touched="false"
                    icon="lock"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>

                  <LoginButton/>
                </div>
              </div>
            </gov-tabs>
          </div>
        </gov-popups>

        {/* popup for registration */}
        <gov-popups ref={registrationDialogRef} id="RegistrationDialog" styles='{"width":"600px","border-radius":"15px"}' header="Register" subheader="Complete the form below to create your 1Gov account." cancel-button-text="Cancel" confirm-button-text="Confirm" show-cancel-button="false" show-confirm-button="false" backdrop-close="true" disable-close="false">
          <div style={{ padding: "0px 20px" }}>
            <gov-tabs
              tab-list='["Citizen","Non-citizen"]'
              active-tab="Citizen"
              body-styles='{"border":"none","box-shadow": "none","border-right":"none","padding":"20px 0px"}'
              styles='{ "border": "none" }'
              header-styles='{"align-items": "center","height":"55px","border":"none","border-radius":"0px","border-right":"none","marginTop":"10px"}'
              active-button-styles='{ "color": "white", "border": "none","height":"35px" }'
              inactive-button-styles='{"color":"gray","border":"none","height":"35px"}'
            >
              <div slot="Citizen">
                <gov-form
                  header=""
                  url=""
                  method="POST"
                  enc-type="application/x-www-form-urlencoded"
                  submit-btn-text="Register"
                  hide-cancel-btn="true"
                  variant="success"
                  styles='{"border":"none","box-shadow": "none"}'
                >
                  <gov-input
                    label="National ID No."
                    type="text"
                    placeholder="Enter your Omang Number"
                    icon="profileCard"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="ID Expiry Date"
                    type="date"
                    placeholder="Enter your Omang Number"
                    icon="calendarMonth"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your Middle Name (optional)"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Surname"
                    type="text"
                    placeholder="Enter your Surname"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    is-valid="true"
                    is-touched="false"
                    validation-pattern="^267\d{8}$"
                    required="true"
                    error-message="Phone number must start with 267 and be 11 digits long (e.g., 26777380956)"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-checkbox
                    label="I agree to the terms and conditions"
                    required="true"
                  ></gov-checkbox>
                </gov-form>
              </div>
              <div slot="Non-citizen">
                <gov-form
                  header=""
                  url=""
                  method="POST"
                  enc-type="application/x-www-form-urlencoded"
                  submit-btn-text="Register"
                  hide-cancel-btn="true"
                  variant="success"
                >
                  <gov-input
                    label="Passport Number"
                    type="text"
                    placeholder="Enter your Passport Number"
                    icon="profileCard"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="ID Expiry Date"
                    type="date"
                    placeholder="Enter your Omang Number"
                    icon="calendarMonth"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-upload id="uploadComponent" name="documents" label="Upload Documents" allowedfiletypes="[&quot;pdf&quot;, &quot;png&quot;, &quot;jpeg&quot;]" required=""></gov-upload>

                  <gov-input
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your Middle Name (optional)"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Surname"
                    type="text"
                    placeholder="Enter your Surname"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  ></gov-input>
                  <gov-input
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    is-valid="true"
                    styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'                  >
                  </gov-input>
                </gov-form>
              </div>
            </gov-tabs>
          </div>
        </gov-popups>

      </gov-box>
    </div>
  );
}
