"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
var inputSubmit = {
    "background-color": "#4CAF50",
    color: "white",
    padding: "12px 20px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
        "background-color": "#45a049"
    }
};
var SubmitButton = function () { return core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("input", { type: "submit", style: inputSubmit }, " ")); };
exports.default = SubmitButton;
