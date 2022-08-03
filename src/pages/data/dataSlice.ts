import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface dataState {
  dataFormActive: boolean;
}

const initialState: dataState = {
  dataFormActive: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleDataActive: (state) => {
      state.dataFormActive = !state.dataFormActive;
    },
  },
});

export const { toggleDataActive } = dataSlice.actions;
export default dataSlice.reducer;
