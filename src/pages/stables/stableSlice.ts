import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface stableState {
  stableFormActive: boolean;
}

const initialState: stableState = {
  stableFormActive: false,
};

export const stableSlice = createSlice({
  name: "stable",
  initialState,
  reducers: {
    toggleStableActive: (state) => {
      state.stableFormActive = !state.stableFormActive;
    },
  },
});

export const { toggleStableActive } = stableSlice.actions;
export default stableSlice.reducer;
