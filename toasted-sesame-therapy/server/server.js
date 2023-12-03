require('dotenv').config('../.env');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const { subscribeToMailchimp } = require('./mailchimp');

const app = express();
const corsOptions = {
  origin: '*', // This will allow all origins
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));app.use(bodyParser.json());
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});


app.post('/submit-form', async (req, res) => {
  // Destructuring the body to match the case used in the client-side form
  const { firstName, lastName, email, subject, message, subscribe } = req.body;
  // Set up the mail options, using the corrected field names
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
        console.error(`Error subscribing ${email} to Mailchimp:`, error.message);
      }
    }

    res.status(200).json({ message: 'Email sent successfully', subscribed: !!subscribe });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email', details: error.message });
  }
});
