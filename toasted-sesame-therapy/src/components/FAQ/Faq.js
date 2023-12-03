import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Heading,
  useColorModeValue,
  Divider,
  Link,
} from '@chakra-ui/react';import ArticleLayout from '../Layout/ArticleLayout';
import faqData from './constants';
const FAQ = () => {
  const dividerColor = useColorModeValue('gray.400', 'gray.600');

  return (
    <ArticleLayout>
      <Box maxWidth={{ base: "100%", md: "800px" }} minWidth={{ base: "100%", md: "800px" }} paddingBottom="2rem">
<Heading as="h1" size="xl" mb={14}>Things You Might Like to Know</Heading>
        <Accordion allowToggle>
          {faqData.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold" fontSize="2xl">{faq.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} fontSize="xl">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Divider borderColor={dividerColor} my={5} />
        <Link
        href="/contact"
        _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
        transition="transform 0.2s ease-in-out"
      >
        <Text fontSize="xl" mt={5} textAlign="center" w="100%">
          Have more questions? 🫰🏻
        </Text>
      </Link>

        <Divider borderColor={dividerColor} my={8} />
    </ArticleLayout>
  );
}

export default FAQ;
