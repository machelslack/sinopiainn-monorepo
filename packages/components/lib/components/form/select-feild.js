"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
/* Style inputs */
const selectField = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    "marginTop": "6px",
    "marginBottom": "16px",
    resize: "vertical"
};
const SelectField = ({ options }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("select", { style: selectField }, options.map((optionItem) => core_1.jsx("option", { key: optionItem }, optionItem))));
exports.default = SelectField;