"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react")); // importing FunctionComponent
var scrollmenu = {
    backgroundColor: "#333",
    overflow: "auto",
    whiteSpace: "nowrap",
    "& a": {
        display: "inline-block",
        color: "white",
        textAlign: "center",
        padding: "14px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#777"
        }
    }
};
exports.MenuBar = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("section", { style: scrollmenu, className: "scrollmenu" },
        " ",
        children,
        " ");
};
exports.default = exports.MenuBar;
