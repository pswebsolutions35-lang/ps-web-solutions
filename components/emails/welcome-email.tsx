import * as React from 'react';

interface WelcomeEmailProps {
  name: string;
  company_name: string;
}

export const WelcomeEmail = ({ name, company_name }: WelcomeEmailProps) => (
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
      Welcome to the Family!
    </h1>
    <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#ccc', marginBottom: '24px' }}>
      Hi {name}, we are thrilled to be partnering with <strong>{company_name}</strong>. Our mission is to build you a website that doesn't just look great, but dominates your local market.
    </p>
    
    <div style={{ marginBottom: '32px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Your Onboarding Roadmap:</h2>
      <div style={{ spaceY: '12px' }}>
        {[
          { step: 1, label: 'Onboarding Questionnaire', desc: 'Tell us about your brand and goals.' },
          { step: 2, label: 'Kickoff Call', desc: 'Meet your dedicated project manager.' },
          { step: 3, label: 'Design Review', desc: 'Approve your custom high-fidelity mocks.' },
          { step: 4, label: 'Launch & Growth', desc: 'Go live and start capturing leads.' },
        ].map((item) => (
          <div key={item.step} style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#0077FF',
              color: '#fff',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0
            }}>
              {item.step}
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{item.label}</p>
              <p style={{ margin: 0, fontSize: '14px', color: '#888' }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <a 
      href="https://pswebsolutions.com/onboarding"
      style={{
        display: 'block',
        backgroundColor: '#0077FF',
        color: '#fff',
        textAlign: 'center',
        padding: '18px',
        borderRadius: '12px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}
    >
      Start Onboarding Now
    </a>
  </div>
);
