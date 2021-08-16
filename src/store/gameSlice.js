import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { operations, numbers } from "../assets/constants";
import { getTarget } from "../assets/utils";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    target: 0,
    current: 0,
    steps: 0,
    operations: [],
    operands: [],
    gameState: "",
  },
  reducers: {
    gameInit: (state) => {
      switch (state.gameDifficulty) {
        case "hard":
          state.steps = _.random(3, 4);
          state.current = _.random(1, 25);
          break;
        case "middle":
          state.steps = _.random(2, 3);
          state.current = _.random(1, 10);
          break;
        default:
        case "easy":
          state.steps = _.random(2, 3);
          state.current = _.random(1, 5);
          break;
      }
      console.log("before", state.steps);
      state.operations = _.sampleSize(operations, 3);
      state.operands = _.sampleSize(numbers, 3);
      state.target = getTarget(
        state.current,
        state.steps,
        state.operations,
        state.operands
      );
      state.steps += 1;
      console.log("after", state.steps);
      state.gameState = "in progress";
      return state;
    },
    updateCurrent: (state, action) => {
      state.steps -= 1;
      state.current = action.payload;
    },
    updateGameState: (state, action) => {
      state.gameState = action.payload;
    },
    setGameDifficulty: (state, action) => {
      state.gameDifficulty = action.payload;
    },
  },
});

export const {
  gameInit,
  generateTarget,
  updateCurrent,
  updateGameState,
  setGameDifficulty,
} = gameSlice.actions;

export default gameSlice.reducer;
