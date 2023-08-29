import ConstructionPage from './components/ConstructionPage/ConstructionPage';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Flex>
        <Routes>
          <Route path="/" element={<Navigate to="/coming-soon" />} />
          <Route path="/coming-soon" element={<ConstructionPage />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;
