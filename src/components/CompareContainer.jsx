import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components/Button";
import Container from "../components/Container";
import { gameInit, updateGameState } from "../store/gameSlice";
import Warning from "./Warning";
import WinMessage from "./WinMessage";

const CompareContainer = () => {
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
    dispatch(gameInit());
  };

  if (tooManySteps)
    return (
      <Container>
        <Warning>You've made too many steps!</Warning>
        <Button type="primary">Restart game</Button>
      </Container>
    );

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
          {current === target ? (
            <WinMessage>Numbers are equal, you're right! </WinMessage>
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
