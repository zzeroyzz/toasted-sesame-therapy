import React, {useEffect, useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';
import { ChakraProvider, Skeleton } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react'
import ToastedLoading from '../ToastedLoading/ToastedLoading';

const MailchimpFormContainer = props => {
    const [isLoading, setIsLoading] = useState(true);
const LoadingSkeleton = () => {
  return (
    <div className="container">
      <Skeleton height="20px" mb="1rem" />
      <Skeleton height="20px" mb="1rem" />
      <Skeleton height="20px" mb="1rem" />
      {/* Add more Skeletons for other loading content */}
    </div>
  );
};
      useEffect(() => {
    // Simulate loading data or any async operations
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);



    const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            {/* {isLoading ? <ToastedLoading/> : */}
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
            {/* } */}
        </div>
    );
};

export default MailchimpFormContainer;
