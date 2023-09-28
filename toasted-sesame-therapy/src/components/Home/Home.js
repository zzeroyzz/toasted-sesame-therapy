import React, { useEffect } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import styled from 'styled-components';
import HomeCarousel from './HomeCarousel';
const Nav = styled.nav`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
`;

const NavBackground = styled.div`
  position: absolute;
  display: block;
  top: -100%;
  width: 100%;
  height: 100%;
  background: rgb(50, 50, 50);
  transition: 0.45s ease-in-out;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background-size: 130%;
  overflow: hidden;
`;

const HeroHeading = styled.h1`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0.3em;
  font-size: 3em;
  font-weight: lighter;
`;

const ContentWrapper = styled(Box)`
  width: 80%;
  height: 3000px;
  padding: 1em 10%;
`;

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      // ... your scroll handling logic ...
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Flex justifyContent="center" flexDirection="column" width="100%">
      <Nav>
        <NavBackground className="nav-bg" />
      </Nav>
      <Hero className="hero" width="100%">
      <HomeCarousel/>
      </Hero>
      <ContentWrapper className="content-wrapper">
        <h1>Some Title</h1>
        <p>Cray marfa artisan mlkshk tote bag...</p>
      </ContentWrapper>
    </Flex>
  );
};

export default Home;
