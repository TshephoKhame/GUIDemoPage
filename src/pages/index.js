"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const loginDialogRef = useRef(null);
  const registrationDialogRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const loginDialog = loginDialogRef.current;
    const registrationDialog = registrationDialogRef.current;

    const handleLoginClose = () => {
      setIsLoginOpen(false);
    };
    const handleRegistrationClose = () => {
      setIsRegistrationOpen(false);
    };
    loginDialog.addEventListener("closed", handleLoginClose);
    registrationDialog.addEventListener("closed", handleRegistrationClose);

    return () => {
      loginDialog.removeEventListener("closed", handleLoginClose);
      registrationDialog.removeEventListener("closed", handleRegistrationClose);
    };
  }, []);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(true);
  };

  const Login = () => {
    console.log("login");
    router.push("/dashboard");
  };

  return (
    <div
      style={{
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
        <div style={{ height: "65vh" }}>
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
            classes="header-row" //added class to apply margin-bottom
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

          style={{ height: "35vh", padding: "40px" }}
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
            {/* <div className="playstore-button-image" style={{}}></div> */}

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
                      color="#171717"
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
                      color="#171717"
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
                      color="#171717"
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
                      color="#171717"
                    >
                      <gov-icon name="X" size="md" variant="white"></gov-icon>
                    </gov-tooltip>
                    <gov-tooltip
                      text="https://www.instagram.com/bwgov/"
                      position="bottom"
                      color="#171717"
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
            size="6"
            align="end"
            justify="end"
            gap="15px"
            is-flex-box="true"
            classes=""
          >
            
            <gov-button
              clicked={handleLoginClick}
              type-variant="button"
              size="lg"
              variant="white"
              border-radius="5px"
              label="Login"

              

             
            ></gov-button>
            <gov-button
              clicked={handleRegistrationClick}
             type-variant="button"
              size="lg"
              border-radius="5px"
              variant="black"
             
              label="Register"
      

            ></gov-button>
          </gov-box>


        </gov-row>

        {/* model for loging */}
        <gov-modal
         ref={loginDialogRef}
          id="LoginDialog"
          header="Login"
          subheader="Complete the form below to access your account."
          size="large"
          is-open={isLoginOpen}
          backdrop-close="true"
          disable-close="false"
          close-on-esc="true"
          show-footer="false"
        >

          <div style={{ padding: "0px 20px" }}>
            <gov-tabs tab-list='["1GovID","Phone","Email"]' active-tab="1GovID">
              <div slot="1GovID">
                <div style={{ padding: "30px" }}>
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
                  ></gov-input>
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
                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>
                  <gov-row
                    align="center"
                    justify="center"
                    className="mt-20 mb-8"
                  >
                    <gov-button
                      label="Login"
                      size="lg"
                      variant="blue"
                      clicked={Login}
                    ></gov-button>
                  </gov-row>
                </div>
              </div>
              <div slot="Phone">
                <div style={{ padding: "30px" }}>
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
                  ></gov-input>
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
                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>
                  <gov-row
                    align="center"
                    justify="center"
                    className="mt-20 mb-8"
                  >

                    <gov-button
                      label="Login"
                      size="lg"
                      variant="blue"
                      clicked={Login}
                    ></gov-button>
                  </gov-row>
                </div>
              </div>
              <div slot="Email">
                <div style={{ padding: "30px" }}>
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
                  ></gov-input>
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
                  ></gov-input>
                  <gov-row align="center">
                    <p className="caption mr-5">Forgot your password? </p>
                    <p className="subtitle" style={{ cursor: "pointer" }}>
                      Recover account
                    </p>
                  </gov-row>
                  <gov-row
                    align="center"
                    justify="center"
                    className="mt-20 mb-8"
                  >
                    <gov-button
                      label="Login"
                      size="lg"
                      variant="blue"
                      
                      clicked={Login}
                      
                    ></gov-button>
                  </gov-row>
                </div>
              </div>
            </gov-tabs>
          </div>
        </gov-modal>


        {/* popup for registration */}
        <gov-modal
          ref={registrationDialogRef}
          id="RegistrationDialog"
          header="Register"
          subheader="Complete the form below to create your 1Gov account."
          size="large"
          is-open={isRegistrationOpen}
          backdrop-close="true"
          disable-close="false"
          close-on-esc="true"
          show-footer="false"
        >
          <div style={{ padding: "0px 20px" }}>
            <gov-tabs tab-list='["Citizen","Non-citizen"]' active-tab="Citizen">
              <div slot="Citizen">
                <gov-form
                  header=""
                  url=""
                  method="POST"
                  enc-type="application/x-www-form-urlencoded"
                  submit-btn-text="Register"
                  hide-cancel-btn="true"
                  variant="blue"
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
                  ></gov-input>
                  <gov-input
                    label="ID Expiry Date"
                    type="date"
                    placeholder="Enter your Omang Number"
                    icon="calendarMonth"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-input
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-input
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your Middle Name (optional)"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-input
                    label="Surname"
                    type="text"
                    placeholder="Enter your Surname"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
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
                  ></gov-input>
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
                  variant="blue"
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
                  ></gov-input>
                  <gov-input
                    label="ID Expiry Date"
                    type="date"
                    placeholder="Enter your Omang Number"
                    icon="calendarMonth"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-upload id="uploadComponent" name="documents" label="Upload Documents" allowedfiletypes="[&quot;pdf&quot;, &quot;png&quot;, &quot;jpeg&quot;]" required=""></gov-upload>

                  <gov-input
                    label="First Name"
                    type="text"
                    placeholder="Enter your First Name"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-input
                    label="Middle Name"
                    type="text"
                    placeholder="Enter your Middle Name (optional)"
                    validation-pattern="/(?:)/"
                    required="false"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
                  <gov-input
                    label="Surname"
                    type="text"
                    placeholder="Enter your Surname"
                    validation-pattern="/(?:)/"
                    required="true"
                    error-message="Invalid input"
                    required-error-message="This field is required"
                  ></gov-input>
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
                  ></gov-input>
                  <gov-checkbox
                    label="I agree to the terms and conditions"
                    required="true"
                  ></gov-checkbox>
                </gov-form>
              </div>
            </gov-tabs>
          </div>
        </gov-modal>
      </gov-box>
    </div>
  );
}
