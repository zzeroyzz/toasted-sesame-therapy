const axios = require("axios");

exports.handler = async (event) => {
  const { email, firstName, lastName } = JSON.parse(event.body);

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  const dataCenter = apiKey.split("-")[1];
  const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/`;

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
