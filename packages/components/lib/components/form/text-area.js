"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
// , select, textarea 
/* Style inputs */
const textArea = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "marginTop": "6px",
    "marginBottom": "16px",
    resize: "vertical",
    height: "170px"
};
const TextArea = () => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("input", { type: "text", style: textArea }));
exports.default = TextArea;