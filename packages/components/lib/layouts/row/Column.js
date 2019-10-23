"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/* Create two columns that float next to eachother */
const column = {
    display: "table-cell",
    "float": "left",
    "width": "25%",
    "padding": "10px"
};
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const Column = ({ children }) => react_1.default.createElement("div", { className: "column", style: column },
    react_1.default.createElement("p", null, children));
exports.default = Column;
