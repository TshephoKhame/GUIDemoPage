import React from 'react';
import { useState, useEffect, useRef } from "react";

export default function ServiceCatagories() {

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
        styles='{"padding": "0px 0px 0px 20px","gidTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))"}'


        >
          {serviceCategories.map((service, index) => (
            <div
              // onclick={openModal}
              onClick={() => openPopup()}
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

    

    </gov-box>
  );
}