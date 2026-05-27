import * as React from 'react';

interface LeadAutoReplyEmailProps {
  name: string;
}

export const LeadAutoReplyEmail = ({ name }: LeadAutoReplyEmailProps) => (
  <div style={{
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '16px'
  }}>
    <h1 style={{ color: '#0077FF', fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>
      Hi {name},
    </h1>
    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#ccc', marginBottom: '24px' }}>
      Thanks for choosing PS Web Solutions! We've received your inquiry and our team is already diving into your project details.
    </p>
    <div style={{
      backgroundColor: '#0A0A0A',
      border: '1px solid #1A1A1A',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '32px'
    }}>
      <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#555', marginBottom: '16px' }}>
        What happens next?
      </h2>
      <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
        {[
          'Strategy review by our lead architect',
          'Initial site audit and competitor analysis',
          'Customized proposal delivery (within 2 hours)'
        ].map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#888' }}>
            <span style={{ color: '#0077FF' }}>✓</span> {item}
          </li>
        ))}
      </ul>
    </div>
    <a 
      href="https://pswebsolutions.com/booking"
      style={{
        display: 'block',
        backgroundColor: '#0077FF',
        color: '#fff',
        textAlign: 'center',
        padding: '18px',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px'
      }}
    >
      Fast-track: Book Your Strategy Call
    </a>
    <p style={{ textAlign: 'center', fontSize: '14px', color: '#333', marginTop: '40px' }}>
      PS Web Solutions • Austin, Texas • © {new Date().getFullYear()}
    </p>
  </div>
);
