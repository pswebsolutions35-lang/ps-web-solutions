import * as React from 'react';

interface InvoiceNotificationEmailProps {
  name: string;
  amount: string;
  dueDate: string;
  paymentLink: string;
}

export const InvoiceNotificationEmail = ({ 
  name, 
  amount, 
  dueDate, 
  paymentLink 
}: InvoiceNotificationEmailProps) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '16px'
  }}>
    <h1 style={{ color: '#0077FF', fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>
      New Invoice from PS Web Solutions
    </h1>
    <p style={{ fontSize: '16px', color: '#ccc', marginBottom: '32px' }}>
      Hi {name}, your new invoice is ready for review and payment.
    </p>
    
    <div style={{
      backgroundColor: '#111',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px',
      border: '1px solid #222'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: '#555' }}>Amount Due:</span>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{amount}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#555' }}>Due Date:</span>
        <span>{dueDate}</span>
      </div>
    </div>

    <a 
      href={paymentLink}
      style={{
        display: 'block',
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
        padding: '18px',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginBottom: '24px'
      }}
    >
      Pay Invoice Securely
    </a>
    
    <p style={{ fontSize: '14px', color: '#444', textAlign: 'center' }}>
      Questions? Just reply to this email.
    </p>
  </div>
);
