import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blackGold: {
      900: '#1a202c',
      500: '#ffd700',
    },
  },
  fonts: {
    heading: 'Patrick Hand',
    body: 'Patrick Hand',
  },
  breakpoints: {
    'sm': '30em',
    'md': '48em',
    'lg': '62em',
    'xl': '80em',
    '2xl': '96em',
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
        minHeight: '100vh',
        backgroundImage: "url('/FlowerBackgroundImg.png')",
        color: 'blackGold.500',
      },
    },
  },
});

export default theme;
