import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Link,
} from '@chakra-ui/react';
import { ToastedSesameLogo } from './ToastedSesameLogo';

export default function LargeWithLogoLeft() {
  const footerLinks = [
    {
      name: 'Contact',
      href: '/contact-us',
    },
    {
      name: 'Faqs',
      href: '/faq',
    },
  ];

  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')} padding={'1rem'}>
      <Container as={Stack} maxW={'10xl'} py={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex justifyContent="flex-start" >
            <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
              <Box gap={'2rem'} display="flex" flexDirection="column">
                <ToastedSesameLogo />
                <Text fontSize={{ base: 'sm', md: 'md' }} color="purple">
                  © 2023 Toasted Sesame Therapy. All rights reserved
                </Text>
              </Box>
            </Stack>
          </Flex>

          <Flex justifyContent="flex-end">
            <Stack spacing={2}>
              {footerLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  _hover={{ textDecoration: 'none', transform: 'scale(1.05)' }}
                  transition="transform 0.2s ease-in-out"
                >
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight={600}
                    color="purple"
                    textAlign="right"
                    _hover={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
