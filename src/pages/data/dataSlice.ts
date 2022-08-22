import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface dataState {
  dataFormActive: boolean;
  selectedIds: string[];
  id: string;
}

const initialState: dataState = {
  dataFormActive: false,
  selectedIds: [],
  id: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleDataActive: (state) => {
      state.dataFormActive = !state.dataFormActive;
    },
    addDataId: (state, action) => {
      //payload is sent while dispatching
      // const id is just a variable that stores the payload
      const id = action.payload;
      state.selectedIds.push(id);
    },
    removeDataId: (state, action) => {
      const id = action.payload;
      let removed = state.selectedIds.filter((x) => x !== id);
      state.selectedIds = removed;
    },
  },
});

export const { toggleDataActive, addDataId, removeDataId } = dataSlice.actions;
export default dataSlice.reducer;
