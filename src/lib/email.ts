import sgMail from '@sendgrid/mail';

// Check if SendGrid API key is set
if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
  // Don't throw here to prevent app from crashing, just log the error
} else {
  console.log('Setting SendGrid API key');
  // Set SendGrid API key
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log('SendGrid API key set successfully');
}

export async function sendVolunteerNotification(volunteerData: {
  name: string;
  email: string;
  phone: string;
  interests: string;
  availability: string;
  message?: string;
}) {
  // Check required environment variables
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Cannot send email: SENDGRID_API_KEY is not set');
    return false;
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error('Cannot send email: ADMIN_EMAIL is not set');
    return false;
  }

  if (!process.env.EMAIL_FROM) {
    console.error('Cannot send email: EMAIL_FROM is not set');
    return false;
  }
  
  const { name, email, phone, interests, availability, message } = volunteerData;

  // Get the admin email and from email from environment variables
  const adminEmail = process.env.ADMIN_EMAIL || 'info@nleeplumb.com';
  const fromEmail = process.env.EMAIL_FROM || 'info@nleeplumb.com';

  console.log(`Sending volunteer notification to admin (${adminEmail}) from ${fromEmail}`);

  const msg = {
    to: adminEmail,
    from: fromEmail,
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
    console.log('Sending email via SendGrid...');
    const response = await sgMail.send(msg);
    console.log('Email sent successfully, status code:', response[0]?.statusCode);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('SendGrid response error:', {
        statusCode: error.response.statusCode,
        body: error.response.body,
        headers: error.response.headers
      });
    }
    return false;
  }
}

export async function sendVolunteerConfirmation(volunteerData: {
  name: string;
  email: string;
}) {
  // Check required environment variables
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Cannot send confirmation email: SENDGRID_API_KEY is not set');
    return false;
  }

  if (!process.env.EMAIL_FROM) {
    console.error('Cannot send confirmation email: EMAIL_FROM is not set');
    return false;
  }
  
  const { name, email } = volunteerData;

  // Get the from email from environment variables
  const fromEmail = process.env.EMAIL_FROM || 'info@nleeplumb.com';
  
  console.log(`Sending volunteer confirmation to ${email} from ${fromEmail}`);

  const msg = {
    to: email,
    from: fromEmail,
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
    console.log('Sending confirmation email via SendGrid...');
    const response = await sgMail.send(msg);
    console.log('Confirmation email sent successfully, status code:', response[0]?.statusCode);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    if (error.response) {
      console.error('SendGrid response error:', {
        statusCode: error.response.statusCode,
        body: error.response.body,
        headers: error.response.headers
      });
    }
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
  // Check required environment variables
  if (!process.env.SENDGRID_API_KEY) {
    console.error('Cannot send contact notification: SENDGRID_API_KEY is not set');
    return false;
  }

  if (!process.env.EMAIL_FROM) {
    console.error('Cannot send contact notification: EMAIL_FROM is not set');
    return false;
  }
  
  const { firstName, lastName, email, phoneNumber, message } = contactData;
  const fullName = `${firstName} ${lastName}`;

  // Get the from email from environment variables
  const fromEmail = process.env.EMAIL_FROM || 'info@nleeplumb.com';
  const toEmail = process.env.ADMIN_EMAIL || 'info@nleeplumb.com';
  
  console.log(`Sending contact form notification to ${toEmail} from ${fromEmail}`);

  const msg = {
    to: toEmail,
    from: fromEmail,
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
    console.log('Sending contact notification email via SendGrid...');
    const response = await sgMail.send(msg);
    console.log('Contact notification email sent successfully, status code:', response[0]?.statusCode);
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    if (error.response) {
      console.error('SendGrid response error:', {
        statusCode: error.response.statusCode,
        body: error.response.body,
        headers: error.response.headers
      });
    }
    return false;
  }
} 