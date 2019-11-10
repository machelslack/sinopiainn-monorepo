import { combineReducers } from "redux";
import roomsReducer from "./rooms";
export const reducers = Object.freeze({
    roomsReducer
});

export const rootReducer = combineReducers(reducers);
