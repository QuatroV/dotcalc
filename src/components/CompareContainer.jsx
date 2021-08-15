import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/Button";
import Container from "../components/Container";
import MobileContainer from "../components/MobileContainer";
import { gameInit, updateGameState } from "../store/gameSlice";
import Warning from "./Warning";
import WinMessage from "./WinMessage";

const CompareContainer = ({ isMobile }) => {
  const steps = useSelector((state) => state.game.steps);
  const target = useSelector((state) => state.game.target);
  const current = useSelector((state) => state.game.current);
  const gameState = useSelector((state) => state.game.gameState);

  const dispatch = useDispatch();

  const tooManySteps = steps < 0;

  const handleCompare = () => {
    dispatch(updateGameState("results"));
  };

  const handleRestart = () => {
    dispatch(updateGameState("results"));
    dispatch(gameInit());
  };

  if (isMobile) {
    switch (gameState) {
      case "in progress":
        return (
          <MobileContainer>
            <Button isMobile type="primary" onClick={handleCompare}>
              Compare
            </Button>
          </MobileContainer>
        );
      case "results":
        return (
          <MobileContainer>
            {current === target && !tooManySteps ? (
              <WinMessage isMobile>
                Numbers are equal, you're right!{" "}
              </WinMessage>
            ) : tooManySteps ? (
              <Warning isMobile>You've made too many steps!</Warning>
            ) : (
              <Warning isMobile>Numbers are not equal!</Warning>
            )}
            <Button isMobile type="primary" onClick={handleRestart}>
              Restart game
            </Button>
          </MobileContainer>
        );
    }
  }

  switch (gameState) {
    case "in progress":
      return (
        <Container>
          <Button type="primary" onClick={handleCompare}>
            Compare
          </Button>
        </Container>
      );
    case "results":
      return (
        <Container>
          {current === target && !tooManySteps ? (
            <WinMessage>Numbers are equal, you're right! </WinMessage>
          ) : tooManySteps ? (
            <Warning>You've made too many steps!</Warning>
          ) : (
            <Warning>Numbers are not equal!</Warning>
          )}
          <Button type="primary" onClick={handleRestart}>
            Restart game
          </Button>
        </Container>
      );
  }
};

export default CompareContainer;
