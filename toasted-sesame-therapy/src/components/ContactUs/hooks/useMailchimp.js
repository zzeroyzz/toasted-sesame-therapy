import { useState } from 'react';

export const useMailchimp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendToEmail = async (formData) => {
    setIsLoading(true);
    setError(null);


    try {
      const response = await fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // If the server responds with a status code that indicates an error, throw an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the response is ok, parse the JSON body of the response
      const result = await response.json();
      setData(result);
    } catch (err) {
      // If the fetch itself fails (e.g., due to network error), catch the error and set it
      setError(err);
    } finally {
      // In both cases, we want to set isLoading to false after the operation is complete
      setIsLoading(false);
    }
  };


  return { sendToEmail, isLoading, data, error };
};
