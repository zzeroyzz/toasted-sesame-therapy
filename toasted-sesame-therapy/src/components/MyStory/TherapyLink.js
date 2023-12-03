import React from 'react';
import {
  Container,
  Stack,
  Text,

  Link,
} from '@chakra-ui/react';

const TherapyLink = () => {

  return (
      <Container as={Stack} p={0}>

                <Link
                  href="/expertise"
                  _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
                  transition="transform 0.2s ease-in-out"
                >
                  <Text
                    fontSize={{base: 'sm', md: 'md'}}
                    fontWeight={600}
                    color="purple"
                    textAlign="left"
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    How do I do therapy?
                  </Text>
                </Link>
      </Container>
  );
}
export default TherapyLink;
