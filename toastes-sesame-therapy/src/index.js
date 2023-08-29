import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // Import extendTheme
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

// Extend Chakra UI theme to add responsive breakpoints
const theme = extendTheme({
  breakpoints: {
    sm: '30em', // Small screen breakpoint
    md: '48em', // Medium screen breakpoint
    lg: '62em', // Large screen breakpoint
    xl: '80em', // Extra large screen breakpoint
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> {/* Apply the custom theme */}
      <div className="container"> {/* Apply the container class */}
        <App />
      </div>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { ChakraProvider, Skeleton } from '@chakra-ui/react';
// import './index.css';
// import App from './App';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const LoadingSkeleton = () => {
//   return (
//     <div className="container">
//       <Skeleton height="20px" mb="1rem" />
//       <Skeleton height="20px" mb="1rem" />
//       <Skeleton height="20px" mb="1rem" />
//       {/* Add more Skeletons for other loading content */}
//     </div>
//   );
// };

// function AppWithLoading() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading data or any async operations
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return isLoading ? <LoadingSkeleton /> : <App />;
// }

// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//     <div className="app-container">
//       <AppWithLoading />
//       </div>
//       <ToastContainer />
//     </ChakraProvider>
//   </React.StrictMode>
// );

// reportWebVitals();
