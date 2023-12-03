import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './utils/ChakraTheme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
