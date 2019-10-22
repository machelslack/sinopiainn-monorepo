"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // importing FunctionComponent
const scrollmenu = {
    backgroundColor: "#333",
    overflow: "auto",
    whiteSpace: "nowrap",
    textAlign: "center",
};
exports.MenuBar = ({ children }) => react_1.default.createElement("section", { style: scrollmenu, className: "scrollmenu" },
    " ",
    children,
    " ");
exports.default = exports.MenuBar;
