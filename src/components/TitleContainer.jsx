import React, { useState } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import MainTitle from "../components/MainTitle";
import MobileContainer from "../components/MobileContainer";
import MobileMainTitle from "../components/MobileMainTitle";
import Button from "../components/Button";

import SettingsIcon from "../icons/settings.png";

import { setNextTheme } from "../assets/utils";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "../store/themeSlice";

const TitleContainer = ({ isMobile }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const gameState = useSelector((state) => state.game.gameState);
  const curentThemeName = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [score, setScore] = useState(
    window.localStorage.getItem(
      "score" ? window.localStorage.getItem("score") : 0
    )
  );

  useEffect(() => {
    setScore(window.localStorage.getItem("score"));
  }, [gameState]);

  if (isMobile)
    return (
      <>
        <MobileContainer onClick={() => setIsCollapsed(!isCollapsed)}>
          <MobileMainTitle hasIcon>dotCalc</MobileMainTitle>
        </MobileContainer>
        {!isCollapsed ? (
          <MobileContainer>
            <StyledWrapper>
              <SettingsTitle isMobile>
                <StyledImg isMobile src={SettingsIcon} alt="" /> Settings
              </SettingsTitle>
              <StyledText isMobile>
                The current theme is "{curentThemeName}"
              </StyledText>
              <Button
                isMobile
                onClick={() => {
                  const nextTheme = setNextTheme();
                  dispatch(updateTheme(nextTheme));
                }}
              >
                {" "}
                Change theme{" "}
              </Button>
            </StyledWrapper>
          </MobileContainer>
        ) : null}
      </>
    );
  return (
    <>
      <Container onClick={() => setIsCollapsed(!isCollapsed)} clickable>
        <MainTitle hasIcon>dotCalc</MainTitle>
      </Container>
      {!isCollapsed ? (
        <Container>
          <StyledWrapper>
            <SettingsTitle>
              <StyledImg src={SettingsIcon} alt="" /> Settings
            </SettingsTitle>
            <StyledText>The current theme is "{curentThemeName}"</StyledText>
            <Button
              onClick={() => {
                const nextTheme = setNextTheme();
                dispatch(updateTheme(nextTheme));
              }}
            >
              {" "}
              Change theme{" "}
            </Button>
          </StyledWrapper>
        </Container>
      ) : null}
    </>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledText = styled.span`
  font-size: ${(props) => (props.isMobile ? "40px" : "20px")};
  ${(props) => (props.isMobile ? "line-height: 60px;" : null)}
  margin-bottom: 6px;
`;

const StyledImg = styled.img`
  width: ${(props) => (props.isMobile ? "100px" : "50px")};
  display: inline;
  margin-right: 8px;
`;

const SettingsTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.isMobile ? "80px" : "40px")};
`;

export default TitleContainer;
