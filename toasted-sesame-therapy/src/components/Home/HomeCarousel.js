import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt,  } from 'react-icons/bi';
import Slider from 'react-slick';
import { cards } from './constants';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HomeCarousel.css'
import styled from 'styled-components';


const HomeCarousel = () => {
  const sliderRef = useRef(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  console.log(cards, 'cards')
  const settings = {
    dots: true,
    // arrows: true,
    // // fade: true,
    // // infinite: true,
    // // autoplay: true,
    // speed: 500,
    // autoplaySpeed: 5000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };

  return (
    <Box position="relative" height="600px" width="full" overflow="hidden">
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => sliderRef.current.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {console.log(sliderRef, 'sliderRef')}
      <StyledCarousel {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <Box key={index} height="6xl" position="relative" backgroundImage={`url(${card.image})`} width="100%">
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.description}
                </Text>
                <ChakraLink as={Button} href={card.link} colorScheme="blue">
                  {card.buttonText}
                </ChakraLink>
              </Stack>
            </Container>
          </Box>
        ))}
      </StyledCarousel>
    </Box>

  );
};

export default HomeCarousel;

const StyledCarousel = styled(Slider)`
  .slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
