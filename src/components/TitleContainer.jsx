import React, { useState } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import MainTitle from "../components/MainTitle";
import MobileContainer from "../components/MobileContainer";
import MobileMainTitle from "../components/MobileMainTitle";

const TitleContainer = ({ isMobile }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  if (isMobile)
    return (
      <>
        <MobileContainer onClick={() => setIsCollapsed(!isCollapsed)}>
          <MobileMainTitle hasIcon>dotCalc</MobileMainTitle>
        </MobileContainer>
        {!isCollapsed ? (
          <MobileContainer>
            Your total score is: {window.localStorage.getItem("score")}
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
          Your total score is: {window.localStorage.getItem("score")}
        </Container>
      ) : null}
    </>
  );
};

export default TitleContainer;
