import React from "react";
import Container from "./Container";
import MobileContainer from "./MobileContainer";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TargetContainer = ({ isMobile }) => {
  const steps = useSelector((state) => state.game.steps);
  const target = useSelector((state) => state.game.target);
  return isMobile ? (
    <MobileContainer>
      <StyledTargetText>
        <LittleMobileText>the target:</LittleMobileText>
        <StyledMobileText>{target}</StyledMobileText>
        <LittleMobileText>steps</LittleMobileText>
        <StyledMobileText>{steps >= 0 ? steps : 0}</StyledMobileText>
      </StyledTargetText>
    </MobileContainer>
  ) : (
    <Container>
      <StyledTargetText>
        <LittleText>the target is</LittleText>
        <StyledText>{target}</StyledText>
        <LittleText>steps</LittleText>
        <StyledText>{steps >= 0 ? steps : 0}</StyledText>
      </StyledTargetText>
    </Container>
  );
};

const LittleText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 30px;
  display: inline;
`;

const StyledText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 80px;
  display: inline;
`;

const StyledTargetText = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
`;

const LittleMobileText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 60px;
  display: inline;
`;

const StyledMobileText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 180px;
  display: inline;
`;

export default TargetContainer;
