"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const ul = core_1.css ` list-style:none; width:100%;padding:0px; `;
const UnorderedList = ({ children }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("ul", { css: ul },
        " ",
        children,
        " "));
exports.default = UnorderedList;
