"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react")); // importing FunctionComponent
const iconBar = {
    position: "relative",
    top: "50%",
    "-webkitTransform": "translateY(-50%)",
    "-mstransform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "& a": {
        "display": "inline-block",
        "textAlign": "center",
        padding: "16px",
        transition: "all 0.3s ease",
        color: "white",
        fontSize: "20px",
        "&:hover": {
            backgroundColor: "#000"
        }
    }
};
const facebook = {
    background: "#3B5998",
    color: "white",
};
const twitter = {
    background: "#55ACEE",
    color: "white"
};
const google = {
    background: "#dd4b39",
    color: "white"
};
const linkedin = {
    background: "#007bb5",
    color: "white"
};
const youtube = {
    background: "#bb0000",
    color: "white"
};
exports.SocialIconBar = ({}) => react_1.default.createElement("div", { style: iconBar },
    react_1.default.createElement("a", { href: "#", style: facebook },
        react_1.default.createElement("i", { className: "fa fa-facebook" })),
    react_1.default.createElement("a", { href: "#", style: twitter },
        react_1.default.createElement("i", { className: "fa fa-twitter" })),
    react_1.default.createElement("a", { href: "#", style: google },
        react_1.default.createElement("i", { className: "fa fa-google" })),
    react_1.default.createElement("a", { href: "#", style: linkedin },
        react_1.default.createElement("i", { className: "fa fa-linkedin" })),
    react_1.default.createElement("a", { href: "#", style: youtube },
        react_1.default.createElement("i", { className: "fa fa-youtube" })));
exports.default = exports.SocialIconBar;
