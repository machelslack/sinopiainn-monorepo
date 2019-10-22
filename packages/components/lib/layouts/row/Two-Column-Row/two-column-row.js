"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
/* Create two columns that float next to eachother */
const column = {
    display: "table-cell",
    "float": "left",
    "width": "50%",
    "padding": "10px"
};
/* Clear floats after the columns */
const row = {
    display: "table",
    width: "100%",
};
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const TwoColumnRow = ({ leftcolumn, rightcolumn }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("div", { className: "row", style: row },
        core_1.jsx("div", { className: "column", style: column }, leftcolumn),
        core_1.jsx("div", { className: "column", style: column },
            core_1.jsx("p", null, rightcolumn))));
exports.default = TwoColumnRow;
