import ConstructionPage from './components/ConstructionPage/ConstructionPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ToastedLoading from './components/ToastedLoading/ToastedLoading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or any async operations
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <Flex>
        <Routes>
          <Route path="/" element={<Navigate to="/coming-soon" />} />
          <Route path="/coming-soon" element={ isLoading ? <ToastedLoading/> : <ConstructionPage />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
