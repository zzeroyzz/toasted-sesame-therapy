import React from 'react';
import { Box, Text, Flex, Link } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  margin-top: auto; /* Push the footer to the bottom of the page */
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Box maxWidth="1200px" mx="auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Text>&copy; 2023 Your Website. All rights reserved.</Text>
          <Flex>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Flex>
        </Flex>
        <Text mt="2">Footer page content</Text>
      </Box>
    </StyledFooter>
  );
};

const NavLink = ({ to, children }) => (
  <Link as={ReactRouterLink} to={to} mx="2" color="white" _hover={{ textDecoration: 'underline' }}>
    {children}
  </Link>
);

export default Footer;
