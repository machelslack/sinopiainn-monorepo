"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
/* Style the container/contact section */
var container = {
    "border-radius": "5px",
    "background-color": "#f2f2f2",
    "padding": "10px"
};
var Container = function () { return core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("section", { style: container, className: "container" })); };
exports.default = Container;
