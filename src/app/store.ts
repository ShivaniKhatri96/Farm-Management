import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import headerReducer from "../components/layout/header/headerSlice";
import stableReducer from "../pages/stables/stableSlice";
// Creating the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  header: headerReducer,
  stable: stableReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer:rootReducer,
      preloadedState
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
