import React, { useState, useEffect } from "react";
import Button from "./Button";
import Grid from "./Grid";

import { useSelector } from "react-redux";

import { applyOperation } from "../assets/utils";

export const ButtonSection = ({ setCurrentValue, currentValue, isMobile }) => {
  const operands = useSelector((state) => state.game.operands);
  const operations = useSelector((state) => state.game.operations);
  const gameState = useSelector((state) => state.game.gameState);
  const currentNum = useSelector((state) => state.game.current);

  const [stack, setStack] = useState([currentValue]);

  useEffect(() => {
    setStack([currentNum]);
  }, [gameState]);

  const addOperand = (operand) => {
    if (operations.includes(stack[1])) {
      const newValue = applyOperation(stack[0], stack[1], operand);
      setCurrentValue(newValue);
      setStack([newValue]);
    }
  };

  const addOperation = (operation) => {
    setStack((prevStack) => [...prevStack, operation]);
  };

  return (
    <Grid columns="3" isMobile={isMobile} gap={isMobile ? "20px" : "4px"}>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperation(operations[0])}
      >
        {operations[0]}
      </Button>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperand(operands[1])}
      >
        {operands[1]}
      </Button>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperation(operations[1])}
      >
        {operations[1]}
      </Button>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperand(operands[0])}
      >
        {operands[0]}
      </Button>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperation(operations[2])}
      >
        {operations[2]}
      </Button>
      <Button
        isMobile={isMobile}
        type="round"
        onClick={() => addOperand(operands[2])}
      >
        {operands[2]}
      </Button>
    </Grid>
  );
};

export default ButtonSection;
