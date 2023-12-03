import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './utils/ChakraTheme';

const root = createRoot(document.getElementById('root')); // Create a root.
root.render( 
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
