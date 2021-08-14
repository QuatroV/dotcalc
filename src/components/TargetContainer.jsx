import React from "react";
import Container from "./Container";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TargetContainer = () => {
  const steps = useSelector((state) => state.game.steps);
  const target = useSelector((state) => state.game.target);
  return (
    <Container>
      <StyledTargetText>
        <LittleText>the target is</LittleText>
        <StyledText>{target}</StyledText>
        <LittleText>steps</LittleText>
        <StyledText>{steps}</StyledText>
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

export default TargetContainer;
