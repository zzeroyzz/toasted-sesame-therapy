const nodemailer = require('nodemailer');
const { subscribeToMailchimp } = require('./mailchimp'); // Make sure this path is correct!

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { firstName, lastName, email, subject, message, subscribe } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL,
    subject: subject,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    let mailchimpResult = {};
    if (subscribe) {
      try {
        mailchimpResult = await subscribeToMailchimp(email);
      } catch (error) {
        console.error(`Error subscribing ${email} to Mailchimp:`, error.message);
        // Don't fail the entire operation just because Mailchimp subscription failed
        mailchimpResult.error = error.message;
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully',
        subscribed: !!subscribe,
        mailchimpResult
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error sending email',
        details: error.message
      }),
    };
  }
};
