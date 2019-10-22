"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
/* Header/Blog Title */
const headerStyles = {
    padding: "30px",
    "fontSize": "40px",
    "textAlign": "center",
    backgroundColor: "white",
};
/* Create two unequal columns that floats next to each other */
/* Left column */
const leftcolumnStyles = {
    float: "left",
    width: "75%",
};
/* Right column */
const rightcolumnStyles = {
    float: "left",
    width: "25%",
    "paddingLeft": "20px",
};
/* Clear floats after the columns */
const rowStyles = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both",
    }
};
/* Footer */
const footerStyles = {
    padding: "20px",
    "textAlign": "center",
    backgroundColor: "#ddd",
    "marginTop": "20px",
};
const BlogLayout = ({ header, leftcolumn, rightcolumn }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css `
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            padding: 20px;
            background: #f1f1f1;
          }
          ` }),
    core_1.jsx("section", { style: headerStyles, className: "header" }, header()),
    core_1.jsx("section", { style: rowStyles, className: "row" },
        core_1.jsx("section", { style: leftcolumnStyles, className: "leftcolumn", css: core_1.css `
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    ` }, leftcolumn),
        core_1.jsx("section", { style: rightcolumnStyles, className: "rightcolumn", css: core_1.css `
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    ` }, rightcolumn)),
    core_1.jsx("section", { style: footerStyles, className: "footer" }));
exports.default = BlogLayout;
