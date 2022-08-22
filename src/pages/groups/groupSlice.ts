import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface groupState {
  groupFormActive: boolean;
  selectedIds: string[];
  id: string;
}

const initialState: groupState = {
  groupFormActive: false,
  selectedIds: [],
  id: "",
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    toggleGroupActive: (state) => {
      state.groupFormActive = !state.groupFormActive;
    },
    addGroupId: (state, action) => {
      //payload is sent while dispatching
      // const id is just a variable that stores the payload
      const id = action.payload;
      state.selectedIds.push(id);
    },
    removeGroupId: (state, action) => {
      const id = action.payload;
      let removed = state.selectedIds.filter((x) => x !== id);
      state.selectedIds = removed;
    },
  },
});

export const { toggleGroupActive, addGroupId, removeGroupId } =
  groupSlice.actions;
export default groupSlice.reducer;
