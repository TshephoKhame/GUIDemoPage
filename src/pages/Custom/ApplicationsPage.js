import React, { useState } from 'react';

export default function  () {
  const [activeTab, setActiveTab] = useState('Submitted');
  
  const submissions = [
    {
      id: '67e2c9c988b5db7714c0',
      title: 'Formbuilder Test Service',
      submitted: '25 Mar 2025 - 17:24',
      status: 'Submitted'
    },
    {
      id: '67e2c9c988b8f6f30361',
      title: 'Formbuilder Test Service',
      submitted: '25 Mar 2025 - 17:24',
      status: 'Submitted'
    },
    {
      id: '67e2a689e9c7ba22a7e3',
      title: 'Formbuilder Test Service',
      submitted: '25 Mar 2025 - 14:50',
      status: 'Submitted'
    },
    {
      id: '67d-937c014d0663f251a',
      title: 'Formbuilder Test Service',
      submitted: '21 Mar 2025 - 00:15',
      status: 'Submitted'
    },
    {
      id: '674c-337c007dfb20050a',
      title: 'Formbuilder Test Service',
      submitted: '21 Mar 2025 - 00:15',
      status: 'Submitted'
    },
    {
      id: '67d-937bf024f8291409',
      title: 'Formbuilder Test Service',
      submitted: '21 Mar 2025 - 00:15',
      status: 'Submitted'
    },
    {
      id: '67db-28302910e093e7ae',
      title: 'Formbuilder Test Service',
      submitted: '19 Mar 2025 - 22:25',
      status: 'Submitted'
    },
    {
      id: '67db-28302048c04d19631',
      title: 'Formbuilder Test Service',
      submitted: '19 Mar 2025 - 22:25',
      status: 'Submitted'
    },
    {
      id: '67da-6a3d23a2d4b9a527',
      title: 'Register a Dispute at Department of Labour',
      submitted: '19 Mar 2025 - 08:27',
      status: 'Submitted'
    }
  ];

  return (
    <gov-box size={12}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <div style={{
          display: 'flex',
          marginBottom: '20px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <div 
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderBottom: activeTab === 'Submitted' ? '2px solid blue' : 'none',
              color: activeTab === 'Submitted' ? 'blue' : 'black'
            }}
            onClick={() => setActiveTab('Submitted')}
          >
            Submitted
          </div>
          <div 
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderBottom: activeTab === 'Drafts' ? '2px solid blue' : 'none',
              color: activeTab === 'Drafts' ? 'blue' : 'black'
            }}
            onClick={() => setActiveTab('Drafts')}
          >
            Drafts
          </div>
        </div>

        <div style={{
          marginBottom: '15px',
          color: '#666'
        }}>
          Total: {submissions.length}
        </div>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f0f0f0',
              borderBottom: '1px solid #e0e0e0'
            }}>
              <th style={{
                padding: '10px',
                textAlign: 'left'
              }}>Submission ID</th>
              <th style={{
                padding: '10px',
                textAlign: 'left'
              }}>Title</th>
              <th style={{
                padding: '10px',
                textAlign: 'left'
              }}>Submitted</th>
              <th style={{
                padding: '10px',
                textAlign: 'left'
              }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr 
                key={index}
                style={{
                  borderBottom: '1px solid #f0f0f0',
                  ':hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                <td style={{
                  padding: '10px',
                  color: '#666'
                }}>
                  {submission.id}
                </td>
                <td style={{
                  padding: '10px'
                }}>
                  {submission.title}
                </td>
                <td style={{
                  padding: '10px',
                  color: '#666'
                }}>
                  {submission.submitted}
                </td>
                <td style={{
                  padding: '10px'
                }}>
                  <span style={{
                    backgroundColor: '#e6f2ff',
                    color: '#0070f3',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8em'
                  }}>
                    {submission.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </gov-box>
  );
}