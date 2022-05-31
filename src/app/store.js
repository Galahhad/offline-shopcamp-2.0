import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/reducer";

export const store = configureStore({
  reducer: reducer,
});
