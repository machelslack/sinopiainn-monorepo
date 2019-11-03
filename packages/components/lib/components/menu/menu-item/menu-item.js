"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const MenuItem = ({ children, label, href }) => core_1.jsx(react_1.default.Fragment, null,
    children,
    core_1.jsx("a", { className: "menuItem", href: href },
        " ",
        label),
    core_1.jsx("span", { className: "menudivider" }, "| "));
exports.default = MenuItem;
