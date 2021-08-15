import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    theme: themeReducer,
  },
});
