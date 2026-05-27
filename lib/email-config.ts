export const emailConfig = {
  from: process.env.EMAIL_FROM || 'PS Web Solutions <hello@pswebsolutions.com>',
  replyTo: 'hello@pswebsolutions.com',
  ownerEmail: process.env.OWNER_EMAIL || 'admin@pswebsolutions.com',
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://pswebsolutions.com',
  resendApiKey: process.env.RESEND_API_KEY,
};

export const emailTemplates = {
  leadAutoReply: {
    subject: 'Thanks for reaching out to PS Web Solutions',
    templateName: 'lead-auto-reply',
  },
  newLeadNotification: {
    subject: '🔥 New Lead: {{company}}',
    templateName: 'new-lead-notification',
  },
  welcomeEmail: {
    subject: 'Welcome to PS Web Solutions - Your Project Kickoff',
    templateName: 'welcome-email',
  },
  invoiceNotification: {
    subject: 'New Invoice from PS Web Solutions: {{invoice_id}}',
    templateName: 'invoice-notification',
  },
};
