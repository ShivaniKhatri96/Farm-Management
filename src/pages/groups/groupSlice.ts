import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface groupState {
  groupFormActive: boolean;
}

const initialState: groupState = {
  groupFormActive: false,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    toggleGroupActive: (state) => {
      state.groupFormActive = !state.groupFormActive;
    },
  },
});

export const { toggleGroupActive } = groupSlice.actions;
export default groupSlice.reducer;