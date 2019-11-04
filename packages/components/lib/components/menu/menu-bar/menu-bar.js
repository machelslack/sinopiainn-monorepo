"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const scrollmenu = core_1.css `
backgroundColor: #333;
overflow: auto;
white-space: nowrap;
text-align: center;
  span {
    color:#CB410B;
  }
  a {
    display: inline-block;
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 17;
    padding: 14px 16px;
    margin: 10;
    text-align: center;
    font-family: 'FontspringLight';
  }
  a:hover {
    color:#CB410B;
  }
`;
exports.MenuBar = ({ children }) => core_1.jsx("section", { css: scrollmenu, className: "scrollmenu" },
    " ",
    children,
    " ");
exports.default = exports.MenuBar;
