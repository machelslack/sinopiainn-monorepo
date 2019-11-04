"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const datepicker = {
    overflow: "hidden",
    backgroundColor: "#333",
    width: "100%",
    testAlign: "center"
};
const formInline = {
    // display: "flex",
    // flexFlow: "row wrap",
    alignItems: "center",
    textAlign: "center"
};
const inputStyles = {
    verticalAlign: "middle",
    margin: "5px 10px 5px 0",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
};
const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "dodgerblue",
    border: "1px solid #ddd",
    color: "white",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "royalblue"
    }
};
const sticky = {
    position: "fixed",
    top: "0",
    width: "100%"
};
const button = core_1.css `
  font-family: 'FontspringRegular';
  `;
exports.Datepicker = ({ children }) => core_1.jsx("section", { style: datepicker, className: "datepicker" },
    core_1.jsx("form", { className: "form-inline", action: "/action_page.php", style: formInline },
        core_1.jsx("input", { type: "text", style: inputStyles }),
        core_1.jsx("input", { type: "text", style: inputStyles }),
        core_1.jsx("input", { type: "text", style: inputStyles }),
        core_1.jsx("button", { type: "submit", style: buttonStyles, css: button }, "CHECK AVAILABILTY")));
exports.default = exports.Datepicker;
