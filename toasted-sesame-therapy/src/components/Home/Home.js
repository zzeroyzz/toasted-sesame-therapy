import {imagesData} from './constants/images';
import {keyframes} from '@emotion/react';
import React, {useState, useEffect} from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  Image,
  VStack,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import './animations/HomeAnimation.css';

const Home = () => {
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      position="relative"
      w="100vw"
      h="100vh"
      overflowY="hidden"
      overflowX="hidden"
      transition="background-color 1s"
      _before={{
        content: '""',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '200vh',
        pointerEvents: 'none',
        zIndex: 1,
        backgroundImage:
          'linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.2) 20%)',
      }}
    >
      <div className="text-content" style={{zIndex: 2}}>
        <Flex
          direction="column"
          align="flex-start"
          justify="center"
          w="100%"
          h="100%"
        >
          <VStack spacing={4}>
            <Accordion allowToggle width="100%" height="100%">
              <AccordionItem border="none" w="100%" h="100%">
                <Box position="relative" width="100%">
                  <Image
                    src={imagesData[currentImageIndex].image}
                    alt="Landing Image"
                    objectFit="cover"
                    objectPosition="center"
                    w="100vw" // Set the width to 100vw to cover the entire viewport width
                    h={{base: '100vh', md: '70vh', lg: '100vh'}} // Adjust height for different screen sizes
                  />
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0, 0, 0, 0.6)"
                  />
                  <Box
                    position="absolute"
                    top="50%"
                    left={{base: '5%', md: '5%', lg: '5%'}}
                    transform="translateY(-50%)"
                    maxWidth={{base: '90%', md: '70%', lg: '50%'}}
                  >
                    <VStack alignItems="start" spacing={6}>
                      <Heading
                        size={{base: '3xl', md: '4xl', lg: '4xl'}}
                        color="white"
                        fontWeight="900"
                        maxWidth="45rem"
                        css={{animation: `${fadeIn} 1s forwards`}}
                        key={`heading-${currentImageIndex}`}
                      >
                        {imagesData[currentImageIndex].header}
                      </Heading>
                      <Text
                        fontSize={{base: 'xl', md: '2xl', lg: '3xl'}}
                        color="white"
                        maxWidth={{base: '80%', md: '90%', lg: '40rem'}}
                        css={{animation: `${fadeIn} 1s forwards`}}
                        key={`text-${currentImageIndex}`}
                      >
                        {imagesData[currentImageIndex].subtext}
                      </Text>
                      <Button
                        size={{base: 'sm', md: 'md', lg: 'lg'}}
                        bg="#784B84"
                        color="white"
                        css={{animation: `${fadeIn} 1s forwards`}}
                        key={`button-${currentImageIndex}`}
                        onClick={() => {
                          window.location.href =
                            imagesData[currentImageIndex].buttonLink;
                        }}
                        _hover={{ bg: 'rgba(120, 75, 132, 0.8)' }}
                      >
                        {imagesData[currentImageIndex].buttonText}
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </AccordionItem>
            </Accordion>
          </VStack>
        </Flex>
      </div>
    </Box>
  );
};

export default Home;
