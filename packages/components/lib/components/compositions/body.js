"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const layouts_1 = require("../../layouts");
const BodyLayout = (props) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("body", null,
        react_1.default.createElement(layouts_1.PageLayout, { pageData: props }),
        react_1.default.createElement("script", { src: "/public/app.js", defer: true })));
exports.default = BodyLayout;
