"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = core_1.css `
-ms-flex: 50%; /* IE10 */
flex: 50%;
padding: 30px;
vertical-align:middle;
h1 {
  border-bottom: thin dashed #CB410B;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:20px;
}
`;
/* Clear floats after the columns */
const row = core_1.css `

display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
`;
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const TwoColumnRow = ({ leftcolumn, rightcolumn }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("div", { className: "row", css: row },
        core_1.jsx("div", { className: "column", css: column }, leftcolumn),
        core_1.jsx("div", { className: "column", css: column },
            core_1.jsx("p", null, rightcolumn))));
exports.default = TwoColumnRow;
