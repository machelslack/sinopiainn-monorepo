"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // importing FunctionComponent
const styles = {
    'background-image': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('photographer.jpg')",
    height: "50%",
    'background-position': "center",
    'background-repeat': "no-repeat",
    'background-size': "cover",
    position: "relative",
};
exports.HeroImage = ({ children }) => react_1.default.createElement("section", { style: styles }, children);
exports.default = exports.HeroImage;
