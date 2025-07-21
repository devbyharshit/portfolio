import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'harshitanand283@gmail.com', // Change this to your email
      subject: `New message from ${name}`,
      html: `<div>
        <h1>New message from ${name}</h1>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      </div>`,
    });

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
