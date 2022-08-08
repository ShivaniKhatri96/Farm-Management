import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface stableState {
  stableFormActive: boolean;
  selectedStables: any[];
}

const initialState: stableState = {
  stableFormActive: false,
  selectedStables: []
};

export const stableSlice = createSlice({
  name: "stable",
  initialState,
  reducers: {
    toggleStableActive: (state) => {
      state.stableFormActive = !state.stableFormActive;
    },
    // stableList: (state) => {
    //   state.selectedStables = 
    // }
  },
});

export const { toggleStableActive } = stableSlice.actions;
export default stableSlice.reducer;
