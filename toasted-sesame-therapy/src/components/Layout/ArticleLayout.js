import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

const MotionBox = motion(Box);

const ArticleLayout = ({ children, ...props }) => {
  const boxShadow = useColorModeValue('xl', 'dark-lg');
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <MotionBox
      pt={150}
      pb={100}
      backgroundColor="#e8dfeb"
      color="gray.700"
      maxWidth="1000px"
      textAlign="center"
      margin="auto"
      borderRadius="lg"
      boxShadow={boxShadow}
      variants={fadeIn}
      initial="initial"
      animate="animate"
      {...props}
    >
      <Flex
        minH="100vh"
        direction="column"
        align="center"
        justify="start"
      >
 {children}
 </Flex>
    </MotionBox>
  );
};

export default ArticleLayout;
