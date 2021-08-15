import _ from "lodash";

export const applyOperation = (value, operation, num) => {
  console.log("operation:", value, operation, num);
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
  console.log("steps ", steps);
  for (let i = 0; i < steps; ++i) {
    const randomOperation = _.sample(operations);
    const randomOperand = _.sample(operands);
    initialValue = applyOperation(initialValue, randomOperation, randomOperand);
  }
  return initialValue;
};
