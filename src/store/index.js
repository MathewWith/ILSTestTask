import { configureStore } from "@reduxjs/toolkit";
import { selectReducer } from "./reducers/transportationReduser";

export const store = configureStore({
  reducer: {
    select: selectReducer,
  },
});
