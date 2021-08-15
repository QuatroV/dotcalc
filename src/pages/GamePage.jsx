import Button from "../components/Button";
import Container from "../components/Container";
import Background from "../components/Background";
import Card from "../components/Card";
import Grid from "../components/Grid";
import MainTitle from "../components/MainTitle";
import MainContainer from "../components/MainContainer";
import TargetContainer from "../components/TargetContainer";
import YourScoreContainer from "../components/YourScoreContainer";
import ButtonSection from "../components/ButtonSection";
import CompareContainer from "../components/CompareContainer";
import MobileContainer from "../components/MobileContainer";
import MobileMainTitle from "../components/MobileMainTitle";
import MobileYourScoreContainer from "../components/MobileYourScoreContainer";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

const GamePage = () => {
  return (
    <Background>
      <BrowserView>
        <MainContainer>
          <Container>
            <MainTitle hasIcon>dotCalc</MainTitle>
          </Container>
          <TargetContainer />
          <YourScoreContainer />
          <CompareContainer />
        </MainContainer>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <MobileMainTitle hasIcon>dotCalc</MobileMainTitle>
        </MobileContainer>
        <TargetContainer isMobile />
        <MobileYourScoreContainer />
        <CompareContainer isMobile />
      </MobileView>
    </Background>
  );
};

export default GamePage;
