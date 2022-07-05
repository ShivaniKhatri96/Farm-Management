import { Action } from "../actions/index";
const initialState = 0;

const headerReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    case "bankrupt":
      return 0;
    default:
      return state;
  }
};
export default headerReducer;
