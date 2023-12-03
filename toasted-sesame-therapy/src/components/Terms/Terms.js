import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {termsData} from './constants';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const fadeIn = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {duration: 1.5}},
};

const Terms = () => {
  const bg = useColorModeValue('#111', '#FFF');
  const textColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <MotionBox
      bg={bg}
      color={textColor}
      minH="100vh"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <Container maxW="container.md" py={12}>
        <VStack spacing={6} alignItems="start">
          <MotionHeading as="h1" size="2xl">
            Terms and Conditions
          </MotionHeading>
          {termsData.map((term, i) => (
            <div key={i}>
              <MotionHeading as="h2" size="lg">
                {term.title}
              </MotionHeading>
              <MotionText>{term.text}</MotionText>
            </div>
          ))}
        </VStack>
      </Container>
    </MotionBox>
  );
};

export default Terms;
