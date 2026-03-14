import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, subject, message, type, involvement } = body;

    let emailSubject = '';
    let emailBody = '';

    if (type === 'donate-notify') {
      emailSubject = `[GAF] Donation Interest: ${email}`;
      emailBody = `Someone wants to be notified when online giving launches.\n\nEmail: ${email}`;
    } else if (type === 'get-involved') {
      emailSubject = `[GAF] Get Involved: ${name}`;
      emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nInterest: ${involvement}\nMessage: ${message || 'None'}`;
    } else {
      emailSubject = `[GAF] Contact: ${subject || 'General Inquiry'}`;
      emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nSubject: ${subject || 'General'}\nMessage: ${message}`;
    }

    await resend.emails.send({
      from: 'G&A Foundation <noreply@gandafoundation.org>',
      to: 'dejon@digitalgaines.com',
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
