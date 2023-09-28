import React, {useState, useEffect} from 'react';
import ToastedSesameSmall from '../../assets/ToastedSesameSmall.png';
import styled from 'styled-components';
import MailchimpFormContainer from '../Mailchimp/MailchimpFormContainer';
import 'react-toastify/dist/ReactToastify.css';
import {BlurhashCanvas} from 'react-blurhash';
import { Box } from '@chakra-ui/react';
const ConstructionPage = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImagesLoaded(true);
    };
    img.src = ToastedSesameSmall;
  }, []);

  return (
    <Container>
      <ScrollContainer>
        <ContentWrapper>
          <CenteredFlex>
{!imagesLoaded ? (
            <BlurhashCanvas
            width="250"
            height="250"
            borderRadius= "50%"
              hash="LFHw}#V?2NR.%isjs,I]B@t6y3jG"/>
) : (
              <img src={ToastedSesameSmall} alt="logo img" onLoad={() =>{
                setImagesLoaded(true);
              }} />
              )}
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

const LogoImage = styled.img`
  width: 250px;

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
