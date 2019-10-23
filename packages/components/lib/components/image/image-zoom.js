"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const zoom = {
    padding: "50px",
    backgroundColor: "green",
    transition: "transform .2s",
    width: "200px",
    height: "200px",
    margin: "0 auto",
    "&:hover": {
        "-msTransform": "scale(1.5)",
        "-webkitTransform": "scale(1.5)",
        "transform": "scale(1.5)"
    }
};
const ImageZoom = ({ children }) => react_1.default.createElement("div", { className: "zoom", style: zoom });
exports.default = ImageZoom;
