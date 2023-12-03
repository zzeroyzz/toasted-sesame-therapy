import React, { useState, useEffect,  } from 'react';
import { Button, FormControl, FormLabel, Input, Text,Checkbox, Flex, Textarea, Heading, useTheme} from '@chakra-ui/react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMailchimp} from './hooks/useMailchimp';
import ArticleLayout from '../Layout/ArticleLayout';
import Confetti from 'react-confetti';

const ContactUs = () => {

  const initialFormData = {
    email: '',
    firstName: '',
    lastName: '',
    subject: '',
    message: '',
    subscribe: false,
  };
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { sendToEmail, isLoading, error } = useMailchimp();
  const [subscribe, setSubscribe] = useState(false);

  useEffect(() => {
    if (!isLoading && error) {
      toast.error(error.message || 'Failed to submit the form.');
    }
  }, [isLoading, error]);
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const completeFormData = {
      ...formData,
      subscribe,
    };

    if (completeFormData.email && completeFormData.firstName && completeFormData.email.includes('@')) {
      try {
        await sendToEmail(completeFormData);
        toast.success('Form submitted successfully!');
        setFormData(initialFormData);
        setSubscribe(false);
        setShowConfetti(true);
      } catch (err) {
        toast.error(`Submission failed: ${err.message}`);
      }
    } else {
      toast.error('Please fill in all required fields with valid information.');
    }
  };

  return (
    <ArticleLayout padding={16} >
       {showConfetti && <Confetti />}
      <Heading as="h1" size="2xl" paddingTop="4rem">
              Contact Us
              </Heading><br/>
              <Heading as="h1" size="lg">
              Embrace Growth with <br/>
            🌼 Toasted Sesame Therapy 🌼
              </Heading>
      <FormHeader>
        Just as toasted sesame seeds release their rich aroma when gently warmed, our therapy practice seeks to unlock
        the hidden strengths within you. With warmth and care, we aim to create a space where you can explore your inner
        flavors, embracing the transformative journey towards a more fulfilling life. Subscribe to our newsletter and
        embark on this aromatic adventure of self-discovery and growth.
      </FormHeader>
      <Flex direction="column" justifyContent="flex-start" alignItems="flex-start" gap="1rem" width={{base: "100%", md:"80%"}}>
      <FormControl netlify>
        <FormLabel fontSize="lg">First Name</FormLabel>
        <StyledInput type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="lg">Last Name</FormLabel>
        <StyledInput type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="lg">Email</FormLabel>
        <StyledInput type="email" name="email" value={formData.email} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="lg">Subject</FormLabel>
        <StyledInput type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel fontSize="lg">Message</FormLabel>
        <StyledTextArea type="text" name="message" value={formData.message} onChange={handleChange} minHeight="150px"/>
      </FormControl>
      <FormControl>
      <Flex width="100%" textAlign="left" paddingTop="2rem" direction="column" justifyContent="flex-start">
  <Checkbox
    isChecked={subscribe}
    onChange={() => setSubscribe(!subscribe)}
    colorScheme="purple"
    iconColor="#4B0082"
    iconSize="1.5em"
    borderColor="#4B0082"
  >
    Subscribe to our newsletter
  </Checkbox>
  <Button
    width={{base: "50%", md:"10%"}}
    size="md"
    bg="#784B84"
    color="white"mt="4"
    align="left"
    onClick={(e) => handleSubmit(e)}
    _hover={{ bg: 'rgba(120, 75, 132, 0.8)' }}
    >
        {isLoading ? (
          <div className="mc__alert mc__alert--sending">Sending...</div>
        ) : (
          <div className="mc__alert mc__alert--sending">Send</div>
        )}
      </Button>
  </Flex>

</FormControl>
</Flex>
    </ArticleLayout>
  );
};
const FormHeader = (props) => {
  const theme = useTheme();

  // Define custom styles using theme values
  const customStyles = {
    textAlign: 'center',
    fontSize: theme.fontSizes['xl'],
    paddingBottom: theme.space[4],
    fontWeight: '600',
    padding: { base: theme.space[0], md: theme.space[10] },
  };

  return <Text {...customStyles} {...props} />;
};


export default ContactUs;



const StyledInput = styled(Input)`
  border: 2px solid #4B0082 !important;

  &:focus {
    border-color: #4B0082 !important;
    box-shadow: 0 0 0 1px #4B0082 !important;
  }
`;

const StyledTextArea = styled(Textarea)`
  border: 2px solid #4B0082 !important;

  &:focus {
    border-color: #4B0082 !important;
    box-shadow: 0 0 0 1px #4B0082 !important;
  }
`;
