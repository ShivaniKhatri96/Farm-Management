import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import headerReducer from "../components/layout/header/headerSlice";
import stableReducer from "../pages/stables/stableSlice";
import groupReducer from "../pages/groups/groupSlice";
import axiosMiddleware from "redux-axios-middleware";
import HttpService from "../services/HttpService";
// Creating the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  header: headerReducer,
  stable: stableReducer,
  group: groupReducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        axiosMiddleware(HttpService.getAxiosClient())
      ),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
