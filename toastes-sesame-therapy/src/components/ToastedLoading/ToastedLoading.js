import toastedsesameloading from '../../assets/toastedsesameloading.png';
import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

const ToastedLoading = () => {
  return (
    <CenteredContainer>
      <SpinningLoader src={toastedsesameloading} alt="logo img" />
    </CenteredContainer>
  );
}

const CenteredContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this as needed */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SpinningLoader = styled.img`
  width: 200px; /* Adjust the width as needed */
  height: auto;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default ToastedLoading;
