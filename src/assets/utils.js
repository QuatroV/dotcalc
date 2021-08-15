import _ from "lodash";

export const applyOperation = (value, operation, num) => {
  switch (operation) {
    case "+":
      return value + num;
    case "-":
      return value - num;
    case "*":
      return value * num;
    default:
      return null;
  }
};

export const getTarget = (initialValue, steps, operations, operands) => {
  for (let i = 0; i < steps; ++i) {
    const randomOperation = _.sample(operations);
    const randomOperand = _.sample(operands);
    initialValue = applyOperation(initialValue, randomOperation, randomOperand);
  }
  return initialValue;
};

export const addPointsToTheScore = () => {
  const gameStorage = window.localStorage;
  let score = gameStorage.getItem("score");
  console.log(Number.parseInt(score) + 1);
  if (score) gameStorage.setItem("score", Number.parseInt(score) + 1);
  else gameStorage.setItem("score", 1);
};
