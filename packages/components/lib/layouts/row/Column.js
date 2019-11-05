"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
/* Create two columns that float next to eachother */
const column = core_1.css `
    padding:10px;
    display: table-cell;
    width: 25%;
    border-right:thin dashed white;
    large {
        color:white;
    }
`;
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const Column = ({ children }) => core_1.jsx("div", { className: "column", css: column },
    core_1.jsx("p", null, children));
exports.default = Column;
