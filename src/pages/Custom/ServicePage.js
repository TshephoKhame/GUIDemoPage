import React from 'react';

export default function ServiceCatagories() {
  const serviceCategories = [
    {
      icon: "https://picsum.photos/400/300",
      title: "Business Facilitation ",
      serviceCount: 24
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Education & Learning",
      serviceCount: 5
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Government Services",
      serviceCount: 2
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Employment & Labour ",
      serviceCount: 45
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "ICT & Media Services",
      serviceCount: 2
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Immigration & Citizen",
      serviceCount: 17
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Land & Housing",
      serviceCount: 12
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Law, Crime & Justice",
      serviceCount: 47
    },
    {
      icon: "https://picsum.photos/400/300",
      title: "Local Authority/Council",
      serviceCount: 5
    }
  ];

  return (
    <gov-box>
      <div style={{
        // backgroundColor: '#f0f4f8',
        padding: '0px 20px 20px 0px',
        borderRadius: '8px'
      }}>
        <gov-box className="primary-bg border-radius-lg mb-10" style={{
                padding:"15px 25px"
            }}>
            <gov-box style={{
            }}>
                <p
                className="h2"
                style={{
                margin: '0',
                color: 'black'
                }}>
                    Hi Jakida
                </p>
                <p 
                className="white-text"
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
                     borderRadius: '4px',
                    fontSize: '16px'
                    }}>
            </gov-input>
            </gov-row>
        </gov-box>

        <div style={{
          fontSize: '18px',
          marginBottom: '10px',
          padding: '0px 20px',
        }} className='success-text'>
          228 services available
        </div>

             

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}>
            {/* {serviceCategories.map((service, index) => (
            <gov-row 
              key={index}
            >
              <gov-card
              className='border bw-1 border-radius-lg shadow d-flex align-center'
              style={{
                cursor: 'pointer',
                width:'100%',
                height:'80%',
                marginBottom: '10px'
              }}
               card-title={service.title} 
               description=""
               image-src={service.icon} 
               button-text={`${service.serviceCount} Services`}
               alignment="horizontal" //horizontal vertical
               image-clip="fill" >
            </gov-card>
            </gov-row>
          ))} */}
          {serviceCategories.map((service, index) => (
            <gov-card showButton={false}>
            <gov-row 
              key={index}
              className='border bw-1 border-radius-lg shadow d-flex align-center'
             
            //   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            //   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
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
              <gov-box is-flex-box="true"  align="center" justify="space-between" className="" gap='20px' style={{flexDirection:'column',height:'100%',marginLeft:'10px',padding:'10px 0px'}}>
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
            </gov-row>
            </gov-card>
          ))}
        </div>
      </div>
    </gov-box>
  );
}