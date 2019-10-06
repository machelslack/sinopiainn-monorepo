"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react")); // importing FunctionComponent
var styles = {
    "background-color": "#333",
    overflow: "hidden"
};
exports.MenuBar = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("section", { style: styles }, children);
};
exports.default = exports.MenuBar;
