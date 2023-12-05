import React, {useState, useEffect} from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  Link,
  Image,
  Divider,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {expertiseData, subtitleText} from './constants';
import ArticleLayout from '../Layout/ArticleLayout';
import FlowerAnimations from '../MyStory/FlowerAnimations/FlowerAnimations';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

const fadeIn = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {duration: 1.2}},
};

const Expertise = () => {
const dividerColor = useColorModeValue('gray.400', 'gray.600');

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollFadeIn = {
    hidden: {opacity: 0},
    show: (i) => ({
      opacity: 1,
      transition: {delay: i * 0.2, duration: 1},
      y: 0,
    }),
    initial: {opacity: 0, y: 100},
  };

  return (
    <ArticleLayout
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <FlowerAnimations/>
      <MotionVStack spacing={8} alignItems="center">
        <Heading as="h1" size="2xl">
          Explore My Expertise

        </Heading>
        <Text fontSize="xl" textAlign="start" w="80%">
          {subtitleText}
        </Text>

        <MotionVStack spacing={10} alignItems="start" w="80%">
          {expertiseData.map((section, index) => (
            <MotionBox key={section.title} variants={fadeIn} width="100%">
              <Flex justifyContent="center" width="100%">
                <MotionImage
                  w={['100%', '85%', '75%']}
                  src={section.img}
                  alt={section.title}
                  boxShadow="lg"
                  mb={4}
                  borderRadius="md"
                  variants={scrollFadeIn}
                  initial="initial"
                  custom={index}
                  animate={scrollY > index * 150 ? 'show' : 'hidden'}
                />
              </Flex>
              <MotionText fontWeight="bold" fontSize="2xl" textAlign="left" paddingBottom="1rem">
                {section.title}
              </MotionText>
              <MotionText textAlign="start" fontSize="xl">{section.content}</MotionText>
            </MotionBox>
          ))}
        </MotionVStack>

        <Divider borderColor={dividerColor} w="80%" my={5} />
        <Link
        href="/contact-us"
        _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
        transition="transform 0.2s ease-in-out"
      >
        <Text fontSize="lg" mt={5} textAlign="center" w="100%">
        Have more questions? 🫰🏻
        </Text>
      </Link>

        <Divider borderColor={dividerColor} w="80%" my={5} />
        <Flex justify="space-between" width="80%">
          <Text fontSize="sm" color="gray.500">
            © 2023 by Kay
          </Text>
          <Link
            href="#"
            fontSize="sm"
            color="blue.500"
            _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
            transition="transform 0.2s ease-in-out"
          >
            Back to top
          </Link>
        </Flex>
      </MotionVStack>
    </ArticleLayout>
  );
};

export default Expertise;
