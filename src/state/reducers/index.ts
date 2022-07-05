import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
const reducers = combineReducers({
    bank: headerReducer
});

export default reducers