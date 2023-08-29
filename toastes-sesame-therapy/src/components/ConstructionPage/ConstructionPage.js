import React from 'react';
import { Image, Skeleton } from '@chakra-ui/react';
import ToastedSesameLogo from '../../assets/ToastedSesameLogo.png';
import styled from 'styled-components';
import MailchimpFormContainer from '../Mailchimp/MailchimpFormContainer';
import 'react-toastify/dist/ReactToastify.css';

const ConstructionPage = () => {
  return (
    <Container>
      <ScrollContainer>
        <ContentWrapper>
          <CenteredFlex>
            <LogoImage
              src={ToastedSesameLogo}
              alt="logo img"
              fallback={<Skeleton width="15%" height="15%" />}
            />
            <GreetingText>
              Embrace Growth with
              <TSTTextWrapper>🌼 Toasted Sesame Therapy 🌼</TSTTextWrapper>
            </GreetingText>
            <MailchimpFormContainer />
          </CenteredFlex>
        </ContentWrapper>
      </ScrollContainer>
    </Container>
  );
};

export default ConstructionPage;

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenteredFlex = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

const LogoImage = styled(Image)`
  width: 15%;

  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;

const GreetingText = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  width: 80%;
  font-family: 'Fuzzy Bubbles', cursive;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.3rem;
  }
`;

const TSTTextWrapper = styled.div`
  margin-bottom: 8px;
  @media only screen and (max-width: 600px) {
    width: 24rem;
  }
`;

const ScrollContainer = styled.div`
  overflow: hidden; /* Hide scroll bars */
  position: relative; /* Maintain centered content */
`;
