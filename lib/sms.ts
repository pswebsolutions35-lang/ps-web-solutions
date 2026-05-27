import twilio from 'twilio';
import { smsConfig } from './sms-config';

const client = twilio(smsConfig.accountSid, smsConfig.authToken);

export async function sendSMS(to: string, body: string) {
  if (!smsConfig.accountSid || !smsConfig.authToken) {
    console.warn('[SMS Service] Twilio credentials missing. SMS not sent:', body);
    return { success: true, message: 'Mock SMS sent' };
  }

  try {
    const message = await client.messages.create({
      body,
      from: smsConfig.phoneNumber,
      to,
    });
    return { success: true, sid: message.sid };
  } catch (error: any) {
    console.error('[SMS Service] Error sending SMS:', error);
    return { success: false, error: error.message };
  }
}

export async function notifyOwnerOfLead(leadData: any) {
  const { name, company, service_interest, phone } = leadData;
  const body = `🔥 PS Web Solutions — New lead from ${company || name}: ${name} - ${phone || 'No phone'}. Service: ${service_interest || 'General'}. Check dashboard: pswebsolutions.com/dashboard`;
  
  return sendSMS(smsConfig.ownerPhone, body);
}

export async function notifyOwnerOfBooking(bookingData: any) {
  const { name, company, date, time } = bookingData;
  const body = `📅 PS Web Solutions — Strategy call booked with ${name} from ${company || 'N/A'} on ${date} at ${time}.`;
  
  return sendSMS(smsConfig.ownerPhone, body);
}

export async function notifyOwnerOfPayment(paymentData: any) {
  const { amount, client_name, service } = paymentData;
  const body = `💰 PS Web Solutions — [$${amount}] payment received from ${client_name} for ${service}.`;
  
  return sendSMS(smsConfig.ownerPhone, body);
}
