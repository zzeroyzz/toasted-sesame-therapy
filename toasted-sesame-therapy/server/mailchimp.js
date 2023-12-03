require('dotenv').config({ path: '../.env' }); // Useful for local development
const axios = require('axios');

const subscribeToMailchimp = async (email, firstName, lastName) => {
  const dataCenter = process.env.MAILCHIMP_SERVER;
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_ID}/members/`;

  try {
    const response = await axios.post(url, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    }, {
      headers: {
        'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error subscribing to Mailchimp:', error);
    throw new Error('Error subscribing to newsletter.');
  }
};

module.exports = { subscribeToMailchimp };
