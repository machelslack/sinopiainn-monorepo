"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const listThree = {
    'textAlign': "left",
    display: "block",
    padding: "8px 0",
    'listStyle': "none"
};
const UnorderedList = ({ children }) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("ul", { className: "list-three mdl-list", style: listThree },
        children,
        " "));
exports.default = UnorderedList;
