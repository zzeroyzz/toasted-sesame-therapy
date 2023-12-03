const nodemailer = require("nodemailer");
const { subscribeToMailchimp } = require("./mailchimp");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const requestBody = JSON.parse(event.body);
  const { firstName, lastName, email, subject, message, subscribe } =
    requestBody;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
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
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    if (subscribe) {
      try {
        await subscribeToMailchimp(email);
      } catch (error) {
        console.error(
          `Error subscribing ${email} to Mailchimp:`,
          error.message
        );
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully",
        subscribed: !!subscribe,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error sending email",
        details: error.message,
      }),
    };
  }
};
