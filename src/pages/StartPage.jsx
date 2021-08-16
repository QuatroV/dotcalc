import Button from "../components/Button";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";
import Background from "../components/Background";
import MainTitle from "../components/MainTitle";
import MobileMainTitle from "../components/MobileMainTitle";
import MainContainer from "../components/MainContainer";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";

import { gameDifficulties } from "../assets/constants";
import { setGameDifficulty } from "../store/gameSlice";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { gameInit } from "../store/gameSlice";
import { BrowserView, MobileView } from "react-device-detect";
import { useEffect } from "react";

const StartPage = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { value } = e.target;
    dispatch(setGameDifficulty(value));
  };

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
            <StyledWrapper>
              <StyledDifficultyText>Difficulty:</StyledDifficultyText>
              <Dropdown onClick={handleClick} items={gameDifficulties} />
              <StyledLink
                to="/game"
                onClick={() => {
                  dispatch(gameInit());
                }}
              >
                <Button type="primary">Start game</Button>
              </StyledLink>
            </StyledWrapper>
          </Container>
        </MainContainer>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <MobileMainTitle hasIcon>dotCalc</MobileMainTitle>
        </MobileContainer>
        <MobileContainer>
          <StyledMobileTitle>Welcome to the dotCalc game!</StyledMobileTitle>
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
          <StyledWrapper>
            <StyledDifficultyText>Difficulty:</StyledDifficultyText>
            <Dropdown isMobile onClick={handleClick} items={gameDifficulties} />
            <StyledMobileLink
              to="/game"
              onClick={() => {
                dispatch(gameInit());
              }}
            >
              <Button isMobile type="primary">
                Start game
              </Button>
            </StyledMobileLink>
          </StyledWrapper>
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
  padding: 10px 20px;
  line-height: 47px;
  text-align: justify;
`;

const StyledTitle = styled.div`
  padding-left: 4px;
  font-size: 30px;
  font-family: "Lato", sans-serif;
`;

const StyledMobileTitle = styled.div`
  padding-left: 20px;
  font-size: 60px;
  font-family: "Lato", sans-serif;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  margin-top: 8px;
`;

const StyledDifficultyText = styled.span`
  margin-bottom: 4px;
`;

const StyledMobileLink = styled(Link)`
  margin-top: 20px;
`;

export default StartPage;
