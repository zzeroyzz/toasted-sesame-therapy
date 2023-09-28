import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Header />
      <Flex flexGrow={1} flexDirection="column">
        {children}
      </Flex>
      <Box paddingTop="5rem">
      <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
