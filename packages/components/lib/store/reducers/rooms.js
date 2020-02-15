"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const initial_state_1 = __importDefault(require("../initial-state"));
exports.default = (state = initial_state_1.default().rooms, { payload, type } = {}) => {
    switch (type) {
        case "UPDATE_BOOKING":
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};