import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomForm = ({ status, message, onValidated }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (status === 'success') {
      toast.success('Subscribed successfully!');
      setFormData(initialFormData); // Reset the form after successful submission
    } else if (status === 'error') {
      toast.error('Failed to send email. Please try again.');
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.email.indexOf('@') > -1 &&
      onValidated({
        MERGE0: formData.email,
        MERGE1: formData.firstName,
        MERGE2: formData.lastName,
      });
  };

  return (
    <FormContainer>
      <FormHeader>
        Just as toasted sesame seeds release their rich aroma when gently warmed, our therapy practice seeks to unlock
        the hidden strengths within you. With warmth and care, we aim to create a space where you can explore your inner
        flavors, embracing the transformative journey towards a more fulfilling life. Subscribe to our newsletter and
        embark on this aromatic adventure of self-discovery and growth.
      </FormHeader>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} />
      </FormControl>
      <Flex>
      <SubmitButton colorScheme="#ab8fb0" mt="4" align="left" onClick={(e) => handleSubmit(e)}>
        {status === 'sending' ? (
          <div className="mc__alert mc__alert--sending">Sending...</div>
        ) : (
          <div className="mc__alert mc__alert--sending">Send</div>
        )}
      </SubmitButton>
      </Flex>
    </FormContainer>
  );
};

export default CustomForm;

const FormContainer = styled(Box)`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 40rem;
  font-family: 'Fuzzy Bubbles', cursive;
  font-weight: 600;
  padding-bottom: 2rem;
  background-color:  #ab8fb0;
  @media only screen and (max-width: 600px) {
    width: 20rem;
  }
`;

const FormHeader =styled(Text)`
text-align: center;
padding-bottom: 2rem;
font-weight: 600;
`;

const SubmitButton = styled(Button)`
background-color: #decde1;
display: flex;
justify-content: flex-start;
`;
