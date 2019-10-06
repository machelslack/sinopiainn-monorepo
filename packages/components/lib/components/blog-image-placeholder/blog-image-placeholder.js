"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
/* Fake image */
var fakeimg = {
    "backgroundColor": "#aaa",
    width: "100%",
    padding: "20px",
    height: "200px"
};
var BlogImagePlaceholder = function () { return react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { style: fakeimg, className: "fakeimg" })); };
exports.default = BlogImagePlaceholder;
