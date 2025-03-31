import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not set in environment variables');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendVolunteerNotification(volunteerData: {
  name: string;
  email: string;
  phone: string;
  interests: string;
  availability: string;
  message?: string;
}) {
  const { name, email, phone, interests, availability, message } = volunteerData;

  const msg = {
    to: process.env.ADMIN_EMAIL || 'your-admin-email@example.com', // Replace with your admin email
    from: process.env.EMAIL_FROM || 'noreply@example.com',
    subject: 'New Volunteer Application',
    text: `
New volunteer application received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Interests: ${interests}
Availability: ${availability}
Message: ${message || 'No message provided'}
    `,
    html: `
<h2>New Volunteer Application</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Interests:</strong> ${interests}</p>
<p><strong>Availability:</strong> ${availability}</p>
<p><strong>Message:</strong> ${message || 'No message provided'}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function sendVolunteerConfirmation(volunteerData: {
  name: string;
  email: string;
}) {
  const { name, email } = volunteerData;

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM || 'noreply@example.com',
    subject: 'Thank You for Volunteering!',
    text: `
Dear ${name},

Thank you for your interest in volunteering with our campaign! We have received your application and will review it shortly.

We will contact you soon with more information about volunteer opportunities.

Best regards,
The Campaign Team
    `,
    html: `
<h2>Thank You for Volunteering!</h2>
<p>Dear ${name},</p>
<p>Thank you for your interest in volunteering with our campaign! We have received your application and will review it shortly.</p>
<p>We will contact you soon with more information about volunteer opportunities.</p>
<p>Best regards,<br>The Campaign Team</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}

export async function sendContactFormNotification(contactData: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}) {
  const { firstName, lastName, email, phoneNumber, message } = contactData;
  const fullName = `${firstName} ${lastName}`;

  const msg = {
    to: 'info@nleeplumb.com', // Campaign contact email
    from: 'info@nleeplumb.com', // Verified sender
    replyTo: email,
    subject: `New Contact Form Message from ${fullName}`,
    text: `
New contact form message received:

Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber || 'Not provided'}
Message:
${message}
    `,
    html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    return false;
  }
} 