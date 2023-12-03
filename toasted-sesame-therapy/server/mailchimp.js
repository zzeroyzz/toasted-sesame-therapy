const axios = require("axios");

/**
 * Subscribes a user to a Mailchimp mailing list.
 *
 * @param {string} email - The email address to subscribe.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<Object>} The response data from Mailchimp.
 */
const subscribeToMailchimp = async (email, firstName, lastName) => {
  // Extract the data center from the API key (e.g., us20)
  const dataCenter = process.env.MAILCHIMP_SERVER;
  const audienceId = process.env.MAILCHIMP_ID;
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;
  console.log(url, "url");
  console.log(`Data Center: ${process.env.MAILCHIMP_SERVER}`);
  console.log(`Audience ID: ${process.env.MAILCHIMP_ID}`);
  console.log(`API Key: ${process.env.MAILCHIMP_API_KEY}`);
  try {
    const response = await axios.post(
      url,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
      {
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    throw new Error("Error subscribing to newsletter.");
  }
};

module.exports = { subscribeToMailchimp };
