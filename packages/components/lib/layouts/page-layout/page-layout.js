"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
var PageLayout = function () { return core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("section", { className: "topNavigation" }),
    core_1.jsx("section", { className: "heroImage" }),
    core_1.jsx("section", { className: "mainNavigation" }),
    core_1.jsx("section", { className: "datePicker" }),
    core_1.jsx("section", { className: "mainCotent" }),
    core_1.jsx("section", { className: "footer" })); };
exports.default = PageLayout;
