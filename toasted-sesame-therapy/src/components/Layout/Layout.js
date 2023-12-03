import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import {ToastedSesameLogo} from './ToastedSesameLogo';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column">
      <Header ToastedSesameLogo={ToastedSesameLogo}/>
      <Flex flexGrow={1} flexDirection="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
