import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using FormSubmit.co
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('_captcha', 'false');
    formData.append('_next', `${request.nextUrl.origin}/contact?success=true`);

    const response = await fetch('https://formsubmit.co/dikshithraj03@gmail.com', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email sent successfully! Check your inbox.' },
        { status: 200 }
      );
    } else {
      throw new Error('FormSubmit service error');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try emailing directly at dikshithraj03@gmail.com' },
      { status: 500 }
    );
  }
}
