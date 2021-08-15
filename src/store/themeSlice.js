import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { themes } from "../assets/constants";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "default",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
