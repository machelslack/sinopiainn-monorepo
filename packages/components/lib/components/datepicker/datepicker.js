"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react")); // importing FunctionComponent
var form_1 = require("../form/");
var datepicker = {
    overflow: "hidden",
    backgroundColor: "#333",
    position: "fixed",
    top: "0",
    width: "100%"
};
var formInline = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    "& input": {
        verticalAlign: "middle",
        margin: "5px 10px 5px 0",
        padding: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
    },
    "& button": {
        padding: "10px 20px",
        backgroundColor: "dodgerblue",
        border: "1px solid #ddd",
        color: "white",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "royalblue"
        }
    }
};
exports.MenuBar = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("section", { style: datepicker, className: "datepicker" },
        react_1.default.createElement("form", { className: "form-inline", action: "/action_page.php", style: formInline },
            react_1.default.createElement(form_1.TextField, null),
            react_1.default.createElement(form_1.TextField, null),
            react_1.default.createElement(form_1.TextField, null),
            react_1.default.createElement("button", { type: "submit" }, "Submit")));
};
exports.default = exports.MenuBar;
