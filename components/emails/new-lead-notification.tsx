import * as React from 'react';

interface NewLeadNotificationEmailProps {
  name: string;
  email: string;
  company?: string;
  service: string;
  message?: string;
}

export const NewLeadNotificationEmail = ({ 
  name, 
  email, 
  company, 
  service, 
  message 
}: NewLeadNotificationEmailProps) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#fff',
    color: '#000',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #eee',
    borderRadius: '16px'
  }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>
      🔥 New Lead Received
    </h1>
    <div style={{ marginBottom: '32px' }}>
      <p style={{ margin: '8px 0' }}><strong>Name:</strong> {name}</p>
      <p style={{ margin: '8px 0' }}><strong>Email:</strong> {email}</p>
      <p style={{ margin: '8px 0' }}><strong>Company:</strong> {company || 'N/A'}</p>
      <p style={{ margin: '8px 0' }}><strong>Service Interest:</strong> {service}</p>
    </div>
    {message && (
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
          "{message}"
        </p>
      </div>
    )}
    <a 
      href="https://pswebsolutions.com/dashboard"
      style={{
        display: 'block',
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '18px',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}
    >
      View in Dashboard
    </a>
  </div>
);
