import Button from "../components/Button";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";
import Background from "../components/Background";
import MainTitle from "../components/MainTitle";
import MobileMainTitle from "../components/MobileMainTitle";
import MainContainer from "../components/MainContainer";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { gameInit } from "../store/gameSlice";
import { BrowserView, MobileView } from "react-device-detect";

const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <Background>
      <BrowserView>
        <MainContainer>
          <Container>
            <MainTitle hasIcon>dotCalc</MainTitle>
          </Container>
          <Container>
            <StyledTitle>Welcome to the dotCalc game!</StyledTitle>
            <StyledText>
              The rules are simple - at the begging of the game you will be
              given two numbers - initial and target. The goal is to get the
              target number from the initial one. You can do that by using given
              math operations with other numbers. The number of math operations
              you can apply to the initial number is limited - you'll lose if
              you exceed that number. <br />
              Start the game by pressing the button below
            </StyledText>
          </Container>
          <Container>
            <Link
              to="/game"
              onClick={() => {
                dispatch(gameInit());
              }}
            >
              <Button type="primary">Start game</Button>
            </Link>
          </Container>
        </MainContainer>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <MobileMainTitle hasIcon>dotCalc</MobileMainTitle>
        </MobileContainer>
        <MobileContainer>
          <StyledTitle>Welcome to the dotCalc game!</StyledTitle>
          <StyledMobileText>
            The rules are simple - at the begging of the game you will be given
            two numbers - initial and target. The goal is to get the target
            number from the initial one. You can do that by using given math
            operations with other numbers. The number of math operations you can
            apply to the initial number is limited - you'll lose if you exceed
            that number. <br />
            Start the game by pressing the button below
          </StyledMobileText>
        </MobileContainer>
        <MobileContainer>
          <Link
            to="/game"
            onClick={() => {
              dispatch(gameInit());
            }}
          >
            <Button isMobile type="primary">
              Start game
            </Button>
          </Link>
        </MobileContainer>
      </MobileView>
    </Background>
  );
};

const StyledText = styled.div`
  padding: 4px;
  line-height: 20px;
  text-align: justify;
`;

const StyledMobileText = styled.div`
  padding: 20px;
  line-height: 50px;
  text-align: justify;
`;

const StyledTitle = styled.div`
  padding-left: 20px;
  font-size: 60px;
  font-family: "Lato", sans-serif;
`;

export default StartPage;
