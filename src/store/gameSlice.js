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
  },
  reducers: {
    gameInit: (state) => {
      state.current = _.random(1, 10);
      state.steps = _.random(2, 3);
      state.operations = _.sampleSize(operations, 3);
      state.operands = _.sampleSize(numbers, 3);
      state.target = getTarget(
        state.current,
        state.steps,
        state.operations,
        state.operands
      );
      return state;
    },
    updateCurrent: (state, action) => {
      state.steps -= 1;
      state.current = action.payload;
    },
  },
});

export const { gameInit, generateTarget, updateCurrent } = gameSlice.actions;

export default gameSlice.reducer;
