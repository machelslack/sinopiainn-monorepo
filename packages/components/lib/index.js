"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles = {
    border: "1px solid #eee",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontSize: 15,
    padding: "3px 10px",
    margin: 10
};
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (react_1.default.createElement("button", { onClick: onClick, style: styles, type: "button" }, children));
};
Button.displayName = "Button";
Button.defaultProps = {
    onClick: function () { }
};
exports.default = Button;
