/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Divider,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FlowerAnimationData, aboutUsContent } from './constants';
import ArticleLayout from '../Layout/ArticleLayout';
import KayFlower from '../../assets/KayFlower.png';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2 } },
};

const MyStory = () => {
  const articleRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const [articleWidth, setArticleWidth] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1224
  };
  const dividerColor = useColorModeValue('gray.400', 'gray.600');

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const oldWidth = windowSize.width;

      if ((newWidth < breakpoints.mobile && oldWidth >= breakpoints.mobile) ||
          (newWidth >= breakpoints.mobile && oldWidth < breakpoints.mobile) ||
          (newWidth < breakpoints.tablet && oldWidth >= breakpoints.tablet) ||
          (newWidth >= breakpoints.tablet && oldWidth < breakpoints.tablet) ||
          (newWidth < breakpoints.desktop && oldWidth >= breakpoints.desktop) ||
          (newWidth >= breakpoints.desktop && oldWidth < breakpoints.desktop)) {
        window.location.reload();
      } else {
        setWindowSize({ width: newWidth, height: window.innerHeight });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width, windowSize.height]);



  useEffect(() => {
    const handleResize = () => {
      if (articleRef.current) {
        setArticleWidth(articleRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (

      <ArticleLayout
        variants={fadeIn}
        initial="initial"
        animate="animate"
        ref={articleRef}
      >
        <MotionFlex
          minH="100vh"
          direction="column"
          align="center"
          justify="start"
        >
          <Heading
            mb={6}
            fontSize={{ base: '4xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            textAlign="center"
          >
            My Story
          </Heading>
          <MotionImage
          src={KayFlower}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          width={{ base: "250px", md: "350px", lg: "450px" }}
          style={{ position: 'relative', zIndex: 2 }}

          />
    {FlowerAnimationData.map((flower, index) => (
          <MotionImage
            key={index}
            src={flower.src}
            initial={{ y: -100, opacity: flower.opacity }}
            animate={{ y: 0, opacity: flower.animate.opacity }}
            transition={flower.transition}
            width={flower.size}
            style={{
              opacity: flower.opacity,
              position: 'absolute',
              left: flower.left[windowSize.width <= 768 ? 'base' : windowSize.width <= 1024 ? 'md' : 'lg'],
    top: flower.top[windowSize.width <= 768 ? 'base' : windowSize.width <= 1024 ? 'md' : 'lg'],
              zIndex: 1,
            }}
          />
        ))}
          <MotionBox w={{ base: 'full', md: '80%', lg: '70%' }} >
            <Flex flexDirection="column" gap={'1.5rem'}>
              {aboutUsContent.map((content, index) => {
                if (content.component) {
                  return <div key={index}>{content.component}</div>;
                } else {
                  return (
                    <MotionText
                      key={index}
                      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                      mb={4}
                      textAlign="left"
                      lineHeight="1.6"
                    >
                      {content.text}
                    </MotionText>
                  );
                }
              })}
            </Flex>
          </MotionBox>
        </MotionFlex>

        <Divider borderColor={dividerColor} w="80%" my={5} />
        <Link
        href="/contact-us"
        _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
        transition="transform 0.2s ease-in-out"
      >
        <Text fontSize="lg" paddingTop="1rem"  paddingBottom="1rem"textAlign="center" w="100%">
        Lets connect 🫰🏻
        </Text>
      </Link>

        <Divider borderColor={dividerColor} w="80%" my={5} />
      </ArticleLayout>
  );
};

export default MyStory;
