import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send notification email to you
    await resend.emails.send({
      from: 'Hypothetical Lab <onboarding@resend.dev>',
      to: 'scammercammer1@gmail.com',
      subject: 'New Waitlist Signup - Hypothetical Lab',
      html: `
        <h2>New Waitlist Signup!</h2>
        <p>Someone just joined the Hypothetical Lab waitlist:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 });
  }
}
