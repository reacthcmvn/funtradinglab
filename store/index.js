import { configureStore } from "@reduxjs/toolkit";
import bnfAdjustSlice from "./bnfAdjust-slice";

const store = configureStore({
  reducer: {
    tf: bnfAdjustSlice.reducer,
  },
});

export default store;
