"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeadLayout = (props) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("head", null,
        react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        react_1.default.createElement("link", { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.12.1/css/all.css" }),
        react_1.default.createElement("title", null, "This is sinopia inn")));
exports.default = HeadLayout;
