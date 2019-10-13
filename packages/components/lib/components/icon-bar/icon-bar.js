"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react")); // importing FunctionComponent
var iconBar = {
    width: "100%",
    backgroundColor: "#555",
    overflow: "auto"
};
exports.IconBar = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("section", { style: iconBar, className: "iconBar" },
        " ",
        children,
        " ");
};
exports.default = exports.IconBar;
