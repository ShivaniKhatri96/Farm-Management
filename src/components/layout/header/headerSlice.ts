import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";

// Defining a type for the slice state
interface headerState {
  active: boolean;
  hamburgerOn: boolean;
  selectedLang: string;
}

// Defining the initial state using that type
const initialState: headerState = {
  active: false,
  hamburgerOn: false,
  selectedLang: "",
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleActive: (state) => {
      state.active = !state.active;
    },
    toggleHamburger: (state) => {
      state.hamburgerOn = !state.hamburgerOn;
    },
    currentLang: (state, action) => {
      state.selectedLang = action.payload;
    }
  },
});

export const { toggleActive, toggleHamburger, currentLang } = headerSlice.actions;
export default headerSlice.reducer;
