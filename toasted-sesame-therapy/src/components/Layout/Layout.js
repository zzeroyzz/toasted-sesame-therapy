import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import {ToastedSesameLogo} from './ToastedSesameLogo';

const Layout = ({ children, showHeader }) => {
  console.log('showHeader', showHeader);
  return (
    <Flex flexDirection="column">
     {showHeader && <Header ToastedSesameLogo={ToastedSesameLogo}/>}
      <Flex flexGrow={1} flexDirection="column">
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
