import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface stableState {
  stableFormActive: boolean;
  selectedIds: string[];
  id: string;
}

const initialState: stableState = {
  stableFormActive: false,
  selectedIds: [],
  id: '',
};
export const stableSlice = createSlice({
  name: "stable",
  initialState,
  reducers: {
    toggleStableActive: (state) => {
      state.stableFormActive = !state.stableFormActive;
    },
    addId: (state, action)=> {
      const id = action.payload
       state.selectedIds.push(id)
    },
    removeId: (state, action) => {
      const id = action.payload
     let removed = state.selectedIds.filter(x => x !== id);
     state.selectedIds = removed;
    }
  },
});

export const { toggleStableActive, addId, removeId } = stableSlice.actions;
export default stableSlice.reducer;
