import { createSlice } from "@reduxjs/toolkit";

const bnfAdjustSlice = createSlice({
  name: "tf",
  initialState: {
    timeframeRadarMain: 10000,
  },
  reducers: {
    changeTF(state, action) {
      state.timeframeRadarMain = 10000 / action.payload.amount;
    },
  },
});

export const bnfAdjustSliceActions = bnfAdjustSlice.actions;

export default bnfAdjustSlice;
