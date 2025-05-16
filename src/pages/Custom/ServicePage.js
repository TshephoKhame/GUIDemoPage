import React from 'react';
import { useState, useEffect, useRef } from "react";

export default function ServiceCatagories() {
  const popup = useRef(null); 

  const serviceCategories = [
    {
      icon: "./ICT_and_media_services.png",
      title: "Business Facilitation ",
      serviceCount: 24
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Education & Learning",
      serviceCount: 5
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Government Services",
      serviceCount: 2
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Employment & Labour ",
      serviceCount: 45
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "ICT & Media Services",
      serviceCount: 2
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Immigration & Citizen",
      serviceCount: 17
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Land & Housing",
      serviceCount: 12
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Law, Crime & Justice",
      serviceCount: 47
    },
    {
      icon: "./ICT_and_media_services.png",
      title: "Local Authority/Council",
      serviceCount: 5
    }
  ];

  useEffect(() => {
  }, []);  // Added empty dependency array to prevent infinite loop

  const openPopup = () => {
    console.log("Open Popup clicked");
    if (popup.current) {
      popup.current.openModal();
    }
  };

  return (
    <gov-box>
      <div style={{
        padding: '0px 0px 20px 0px',
        borderRadius: '8px'
      }}>
        <gov-box className="primary-bg border-radius-lg mb-10" style={{
          padding: "15px 25px"
        }}>
          <gov-box>
            <p
              className="h2 fw-medium"
              style={{
                margin: '0',
                color: 'black'
              }}>
              Hi Jakida
            </p>
            <p
              className="white-text h6"
              style={{
                margin: '0',
              }}>
              Welcome to your 1Gov1Citizen Portal Dashboard
            </p>
          </gov-box>

          <gov-row style={{
            margin: '20px 0px'
          }}>
            <gov-input
              type="search"
              placeholder="Search all available e-Services"
              icon="search"
              style={{
                width: '100%',
              }}
              styles='{ "padding": "8px", "borderRadius": "10px", "width": "100%" }'
            >
            </gov-input>
          </gov-row>
        </gov-box>

        <div
          style={{
            marginBottom: '10px',
            padding: '0px 0px',
            alignItems: 'center',
          }}
          className='mb-20' >
          <gov-icon name="dotsHorizontalOutline" size="md" variant="primary"></gov-icon>
          <span className='h5 fw-medium'> Browse Service Catagories</span>
        </div>
        <div style={{
          fontSize: '18px',
          marginBottom: '10px',
          padding: '0px 20px',
        }} className='success-text'>
          <span className='h5 fw-bold'>228</span> <span className='h6'>services available</span>
        </div>

        <gov-row gap="20px" 
        styles='{"padding": "0px 0px 0px 20px","display": "grid","gidTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))"}'


        >
          {serviceCategories.map((service, index) => (
            <div
              // onclick={openModal}
              onClick={openPopup}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              show-button='false'
              style={{cursor: 'pointer' ,minWidth:'313px', maxWidth:'313px',}}
              className='border bw-1 border-radius-lg shadow d-flex align-center'
              key={index}>
              <div style={{minWidth:'250px',padding:"0px 5px"}} className='d-flex flex-nowrap'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='m-10 border-radius'
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    
                  }}
                />
                <gov-box is-flex-box="true" align="center" justify="space-between" className="" gap='20px' style={{ flexDirection: 'column', height: '100%', marginLeft: '10px', padding: '10px 0px' }}>
                  <h3 style={{
                    color: '#2c3e50',
                    fontSize: '16px',
                    marginBottom: '10px',
                    fontWeight: 'bold'
                  }}>
                    {service.title}
                  </h3>

                  <div
                    className='primary-bg'
                    style={{
                      color: '#fff',
                      padding: '5px 10px',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}>
                    {service.serviceCount} Services
                  </div>
                </gov-box>
              </div>
            </div>
          ))}
        </gov-row>
      </div>

      {/* Popup */}
      <gov-popups  ref={popup} id="modal1"  header="" subheader="" cancel-button-text="Cancel" confirm-button-text="Accept Conditions & Apply" show-cancel-button="true" show-confirm-button="true" backdrop-close="true" disable-close="false">
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
    <li>
      Be incapacitated by <strong>disabilities or chronic health conditions</strong>, unable to engage in sustainable economic activities, and have insufficient assets and income sources.
    </li>
    <li>Be earning or receiving an income of <strong>P300 per month or less</strong>.</li>
    <li>Possess no more than <strong>six (6) livestock units</strong>.</li>
    
  </ul>
        </div>    
      </gov-popups>

    </gov-box>
  );
}