import React, {useState, useEffect} from 'react';
import {
  Box,
  Flex,
  Link,
  Text,
  Icon,
  CloseButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import {ToastedSesameLogo} from './ToastedSesameLogo';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const headerLinks = [
    {name: 'Therapy Style', href: '/therapy-style'},
    {name: 'My Expertise', href: '/expertise'},
    {name: 'About Me', href: '/my-story'},
    {name: 'FAQs', href: '/faq'},
    {name: 'Get In Touch', href: '/contact-us'},
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (Math.abs(currentScrollPosition - lastScrollPosition) < 20) {
        return;
      }

      if (currentScrollPosition < lastScrollPosition) {
        setShowHeader(true);
      } else if (currentScrollPosition > lastScrollPosition) {
        setShowHeader(false);
      }
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  return (
    <Box
      color="white"
      p={4}
      position="fixed"
      top="0"
      w="100%"
      zIndex="100"
      bg="transparent"
      transition="top 0.5s ease-in-out"
      display={showHeader ? 'block' : 'none'}
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        margin="auto"
      >
        <Flex align="center" flex="1">
          <Link href="/">
           <ToastedSesameLogo />
          </Link>
        </Flex>

        <Flex align="center" flex="1" justify="flex-end">
          <Icon as={FaBars} boxSize={7} onClick={onOpen} color="#ae8ab8" />
        </Flex>

        {isOpen && (
          <SideBar onClose={onClose}>
            {headerLinks.map((link, i) => (
              <Link
                key={i}
                mb={4}
                href={link.href}
                _hover={{textDecoration: 'none', transform: 'scale(1.05)'}}
                transition="transform 0.2s ease-in-out"
              >
                <LinkText fontSize="2xl" fontWeight="bold">
                  {link.name}
                </LinkText>
              </Link>
            ))}
          </SideBar>
        )}
      </Flex>

      {isOpen && <Backdrop onClick={onClose} />}
    </Box>
  );
};

const SideBar = ({onClose, ...props}) => {
  return (
    <Box
      position="fixed"
      right={0}
      top={0}
      bottom={0}
      w={{base: '55%', md: '40%', lg: '25%'}}
      bg="rgba(120, 75, 132, 0.5)"
      color="#784B84"
      p={10}
      pt={20}
      zIndex="120"
      overflowY="auto"
      transform="translateX(0)"
      transition="all 0.5s ease-in-out"
      {...props}
    >
      <StyledCloseButton onClick={onClose} />
      <VStack spacing={4} align="end">
        {props.children}
      </VStack>
    </Box>
  );
};

const StyledCloseButton = styled(CloseButton)`
  svg {
    width: 20px;
    height: 20px;
  }
`;


const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 110;
`;

const LinkText = styled(Text)`
  color: white;
`;

export default Header;
