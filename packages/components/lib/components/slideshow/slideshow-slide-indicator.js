"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const dotContainer = {
    textAlign: "center"
};
/* The dots/bullets/indicators */
const dot = {
    cursor: "pointer",
    height: "15px",
    width: "15px",
    margin: "0 2px",
    backgroundColor: "#bbb",
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color 0.6s ease",
    "&:hover": " background-color: #717171"
};
//   .active {
//     background-color: #717171;
//   }
const SlideShowDots = () => react_1.default.createElement("div", { style: dotContainer },
    react_1.default.createElement("span", { className: "dot", style: dot }),
    react_1.default.createElement("span", { className: "dot", style: dot }),
    react_1.default.createElement("span", { className: "dot", style: dot }));
exports.default = SlideShowDots;
