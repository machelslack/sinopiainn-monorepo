"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // importing FunctionComponent
const iconBar = {
    width: "100%",
    backgroundColor: "#555",
    overflow: "auto"
};
exports.IconBar = ({ children }) => react_1.default.createElement("section", { style: iconBar, className: "iconBar" },
    " ",
    children,
    " ");
exports.default = exports.IconBar;
