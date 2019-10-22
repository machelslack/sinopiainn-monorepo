"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const menuItem = {
    display: "inline-block",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 17,
    padding: "14px 16px",
    margin: 10,
    border: "red thin solid",
    'text-align': "center",
    'text-decoration': "none",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
};
const MenuItem = ({ label }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("a", { style: menuItem, className: "menuItem" },
        " ",
        label),
    core_1.jsx("span", { className: "menudivider" }, "| "));
exports.default = MenuItem;
