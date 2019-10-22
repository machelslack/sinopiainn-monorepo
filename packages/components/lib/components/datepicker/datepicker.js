"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // importing FunctionComponent
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
exports.Datepicker = ({ children }) => react_1.default.createElement("section", { style: datepicker, className: "datepicker" },
    react_1.default.createElement("form", { className: "form-inline", action: "/action_page.php", style: formInline },
        react_1.default.createElement("input", { type: "text", style: inputStyles }),
        react_1.default.createElement("input", { type: "text", style: inputStyles }),
        react_1.default.createElement("input", { type: "text", style: inputStyles }),
        react_1.default.createElement("button", { type: "submit", style: buttonStyles }, "CHECK AVAILABILTY")));
exports.default = exports.Datepicker;
