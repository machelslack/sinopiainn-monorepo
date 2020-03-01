"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const icon_bar_item_with_text_1 = __importDefault(require("../../../components/icon-bar/icon-bar-item-with-text"));
/* Create two columns that float next to eachother */
//   color:#CB410B;
const column = core_1.css `
display: table-cell;
float: left;
width: 16.6%;
padding: 30px;
vertical-align:middle;
text-align:center;

h1 {
  border-bottom: thin dashed #CB410B;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:20px;
}

p{
  font-weight:50;
  font-family: 'Arial';
  line-height:2;

}
`;
/* Clear floats after the columns */
const row = core_1.css `
position: absolute;
bottom: 0;
background-color: black;
height:50px;
color: white;
opacity: 0.7;
    filter: alpha(opacity=70);
    font-family: 'FontspringRegular';
  display: table;
  width: 100%;
  &:after: {
        content: ;
         display: table;
         clear: both;
     }
`;
const breakpoints = [600];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const SixColumnRow = ({ iconTypes }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("div", { className: "row", css: row }, iconTypes.map((iconType) => core_1.jsx("div", { className: "column", css: column },
        core_1.jsx(icon_bar_item_with_text_1.default, { iconType: iconType })))));
exports.default = SixColumnRow;
