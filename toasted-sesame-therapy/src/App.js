import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import ConstructionPage from './components/ConstructionPage/ConstructionPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ToastedLoading from './components/ToastedLoading/ToastedLoading';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or any async operations
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Layout >
      <Flex justifyContent="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/coming-soon"
            element={isLoading ? <ToastedLoading /> : <ConstructionPage />}
          />
        </Routes>
      </Flex>
      </Layout>
    </>
  );
}

export default App;

