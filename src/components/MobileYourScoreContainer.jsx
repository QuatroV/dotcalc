import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import ButtonSection from "./ButtonSection";
import MobileContainer from "./MobileContainer";

import { useSelector, useDispatch } from "react-redux";
import { updateCurrent } from "../store/gameSlice";
import { useDidMountEffect } from "../assets/hooks";

const MobileYourScore = () => {
  const currentNum = useSelector((state) => state.game.current);
  const gameState = useSelector((state) => state.game.gameState);

  const [currentValue, setCurrentValue] = useState(currentNum);

  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentValue(currentNum);
  }, [gameState]);

  useEffect(() => {
    dispatch(updateCurrent(currentValue));
  }, [currentValue]);

  return (
    <MobileContainer>
      <StyledYourScore>
        <StyledCard>
          <StyledContainer>
            <StyledText>{currentNum}</StyledText>
          </StyledContainer>
        </StyledCard>
        <Card>
          <ButtonSection
            isMobile
            currentValue={currentValue}
            setCurrentValue={setCurrentValue}
          />
        </Card>
      </StyledYourScore>
    </MobileContainer>
  );
};

const StyledYourScore = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledText = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 180px;
  display: inline;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  margin-bottom: 20px;
`;

export default MobileYourScore;
