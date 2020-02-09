"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
/* Create two columns that float next to eachother */
const column = {
    display: "table-cell",
    "float": "left",
    "width": "50%",
    "padding": "10px"
};
/* Clear floats after the columns */
/* Clear floats after the columns */
const row = core_1.css `

display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
`;
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const SingleRow = ({ children }) => core_1.jsx("div", { className: "row", css: row }, children);
exports.default = SingleRow;
