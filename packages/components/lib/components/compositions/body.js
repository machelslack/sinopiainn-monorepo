"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var layouts_1 = require("../../layouts");
var BodyLayout = function (props) { return react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("body", null,
        react_1.default.createElement(layouts_1.PageLayout, null))); };
exports.default = BodyLayout;
