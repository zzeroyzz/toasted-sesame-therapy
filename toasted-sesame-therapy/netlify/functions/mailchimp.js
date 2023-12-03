/* eslint-disable no-useless-catch */
const axios = require("axios");

// This is the function we will export
async function subscribeToMailchimp(email, firstName, lastName) {
  console.log("subscribeToMailchimp function entered");
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_ID;
  const dataCenter = apiKey.split("-")[1];
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;
  console.log(url, "url");
  console.log(process.env.MAILCHIMP_ID, "MAILCHIMP_ID");
  console.log(process.env.MAILCHIMP_ID, "MAILCHIMP_ID");
  console.log(dataCenter, "dataCenter");
  console.log(process.env.MAILCHIMP_API_KEY, "API_KEY");
  console.log(apiKey, 'apiKey')
  console.log(audienceId, 'audienceId')


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
          Authorization: `Basic ${Buffer.from(`apikey:${apiKey}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

// We keep the original handler for direct function invocation via HTTP
exports.handler = async (event) => {
  const { email, firstName, lastName } = JSON.parse(event.body);

  try {
    console.log("Calling subscribeToMailchimp with:", {
      email,
      firstName,
      lastName,
    });
    const response = await subscribeToMailchimp(email, firstName, lastName);
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Error subscribing to Mailchimp:", error);
    return {
      statusCode: error.response.status || 500,
      body: JSON.stringify({
        error: "Error subscribing to newsletter.",
        details: error.message,
      }),
    };
  }
};

// Export the function for use in other files
exports.subscribeToMailchimp = subscribeToMailchimp;
