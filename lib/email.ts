import { emailConfig } from './email-config';

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  console.log(`[Email Service] Sending email to ${to}: "${subject}"`);
  if (!emailConfig.resendApiKey) {
    console.warn('[Email Service] RESEND_API_KEY is not set. Email not sent.');
    return { success: true, message: 'Mock email sent (API key missing)' };
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${emailConfig.resendApiKey}`,
      },
      body: JSON.stringify({
        from: emailConfig.from,
        to,
        subject,
        html,
        reply_to: replyTo || emailConfig.replyTo,
      }),
    });
    const result = await response.json();
    return { success: true, data: result };
  } catch (error: any) {
    console.error('[Email Service] Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export async function triggerLeadAutomation(leadData: any) {
  const { name, email, company, service_interest } = leadData;

  // 1. Auto-reply to lead
  await sendEmail({
    to: email,
    subject: 'Thanks for reaching out to PS Web Solutions',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #000; color: #fff; padding: 40px; border-radius: 16px;">
        <h1 style="color: #0077FF;">Hi ${name},</h1>
        <p>Thanks for reaching out! We've received your inquiry regarding <strong>${service_interest || 'our services'}</strong>.</p>
        <p>A member of our strategy team will get back to you within 2 hours.</p>
        <a href="${emailConfig.baseUrl}/booking" style="display: inline-block; background-color: #0077FF; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold;">
          Book Your Strategy Call Now
        </a>
        <p style="font-size: 14px;">&copy; ${new Date().getFullYear()} PS Web Solutions.</p>
      </div>
    `
  });

  // 2. Notification to owner
  await sendEmail({
    to: emailConfig.ownerEmail,
    subject: `New Lead: ${company || name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>You have a new lead!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service_interest || 'N/A'}</p>
        <hr />
        <a href="${emailConfig.baseUrl}/dashboard" style="background: #0077FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Dashboard</a>
      </div>
    `
  });
}