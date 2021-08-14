import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ButtonSection from "./ButtonSection";
import Container from "./Container";

import { useSelector, useDispatch } from "react-redux";
import { updateCurrent } from "../store/gameSlice";
import { useDidMountEffect } from "../assets/hooks";

const YourScore = () => {
  const currentNum = useSelector((state) => state.game.current);

  const [currentValue, setCurrentValue] = useState(currentNum);

  const dispatch = useDispatch();

  useDidMountEffect(() => {
    dispatch(updateCurrent(currentValue));
  }, [currentValue]);

  return (
    <Container>
      <StyledYourScore>
        <StyledCard>
          <StyledContainer>
            <StyledText>{currentNum}</StyledText>
          </StyledContainer>
        </StyledCard>
        <Card>
          <ButtonSection
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </Card>
      </StyledYourScore>
    </Container>
  );
};

const StyledYourScore = styled.div`
  display: flex;
  width: 100%;
`;

const StyledText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 80px;
  display: inline;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  margin-right: 8px;
  flex: 2;
`;

export default YourScore;
