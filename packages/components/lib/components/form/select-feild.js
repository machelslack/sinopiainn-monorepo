"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
/* Style inputs */
var selectField = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "margin-top": "6px",
    "margin-bottom": "16px",
    resize: "vertical"
};
var SelectField = function () { return core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("input", { type: "text", style: selectField }, " ")); };
exports.default = SelectField;
