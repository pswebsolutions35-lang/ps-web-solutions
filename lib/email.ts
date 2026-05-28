import { emailConfig } from './email-config';
import { notifyOwnerOfLead } from './sms';

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailOptions) {
  // In a real production app, you would use Resend, SendGrid, etc.
  // Example with Resend:
  /*
  const { data, error } = await resend.emails.send({
    from: emailConfig.from,
    to,
    subject,
    html,
    reply_to: replyTo || emailConfig.replyTo,
  });
  */

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
        <p style="font-size: 16px; line-height: 1.6; color: #ccc;">
          Thanks for reaching out to PS Web Solutions! We've received your inquiry regarding <strong>${service_interest || 'our services'}</strong>.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #ccc;">
          A member of our strategy team is reviewing your details and will get back to you within the next 2 hours.
        </p>
        <div style="margin: 30px 0; padding: 20px; background-color: #111; border-radius: 12px; border: 1px solid #222;">
          <h3 style="margin-top: 0; color: #fff;">What to expect next:</h3>
          <ul style="color: #888; padding-left: 20px;">
            <li>Initial strategy review by our lead developer</li>
            <li>Customized project roadmap based on your goals</li>
            <li>30-minute discovery call (optional)</li>
          </ul>
        </div>
        <a href="${emailConfig.baseUrl}/booking" style="display: inline-block; background-color: #0077FF; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-bottom: 20px;">
          Book Your Strategy Call Now
        </a>
        <p style="font-size: 14px; color: #555; border-top: 1px solid #222; pt: 20px; margin-top: 40px;">
          &copy; ${new Date().getFullYear()} PS Web Solutions. Austin, Texas.
        </p>
      </div>
    `
  });

  // 2. Notification to owner (Email)
  await sendEmail({
    to: emailConfig.ownerEmail,
    subject: `🔥 New Lead: ${company || name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>You have a new lead!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service:</strong> ${service_interest || 'N/A'}</p>
        <p><strong>Message:</strong> ${leadData.message || 'N/A'}</p>
        <hr />
        <a href="${emailConfig.baseUrl}/dashboard" style="background: #0077FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Dashboard</a>
      </div>
    `
  });

  // 3. Notification to owner (SMS)
  await notifyOwnerOfLead(leadData).catch(err => console.error('SMS notification failed:', err));
}
