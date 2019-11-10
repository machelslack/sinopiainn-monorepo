"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const rooms_1 = __importDefault(require("./rooms"));
exports.reducers = Object.freeze({
    roomsReducer: rooms_1.default
});
exports.rootReducer = redux_1.combineReducers(exports.reducers);
