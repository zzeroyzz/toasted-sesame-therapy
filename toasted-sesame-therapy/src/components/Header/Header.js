import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';
import ToastedSesameSmall from '../../assets/ToastedSesameSmall.png';

const StyledHeader = styled.header`
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const NavBackground = styled.div`
  content: '';
  position: absolute;
  display: block;
  top: -100%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgb(50, 50, 50);
  transition: 0.45s ease-in-out;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBackground className="nav-bg" />
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        <HeaderLogo src={ToastedSesameSmall} alt="toastedlogo" />
        <Flex justifyContent="flex-end" alignItems="center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/coming-soon">Coming Soon</NavLink>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};

const NavLink = ({ to, children }) => (
  <Link as={ReactRouterLink} to={to} mx="2" color="white" _hover={{ textDecoration: 'underline' }}>
    {children}
  </Link>
);

const HeaderLogo = styled.img`
  width: 50px;
  margin-right: auto; /* Pushes the logo to the left */
`;

export default Header;
