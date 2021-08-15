import _ from "lodash";

import { themes } from "./constants";

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
  if (score) gameStorage.setItem("score", Number.parseInt(score) + 1);
  else gameStorage.setItem("score", 1);
};

export const setRandomTheme = () => {
  let randomTheme;
  if (window.localStorage.getItem("theme")) {
    randomTheme = _.sample(
      themes.filter((theme) => theme !== window.localStorage.getItem("theme"))
    );
  } else randomTheme = _.sample(themes);
  window.localStorage.setItem("theme", randomTheme);
  return randomTheme;
};
