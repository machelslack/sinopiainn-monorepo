"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var listThree = {
    'textAlign': "left",
    display: "block",
    padding: "8px 0",
    'listStyle': "none"
};
var UnorderedList = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: "list-three mdl-list", style: listThree },
            children,
            " "));
};
exports.default = UnorderedList;
