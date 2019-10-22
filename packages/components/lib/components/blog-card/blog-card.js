"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const card = {
    "backgroundColor": "white",
    padding: "20px",
    "marginTop": "20px"
};
const BlogCard = ({ children }) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", { style: card, className: "card" }, children));
exports.default = BlogCard;
