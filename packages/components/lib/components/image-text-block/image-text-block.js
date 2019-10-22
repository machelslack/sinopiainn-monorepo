"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const container = {
    position: "relative",
    fontFamily: "Arial",
};
const textBlock = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: "black",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "25%",
};
/* Position the "next button" to the right */
const image = {
    width: "100%"
};
const textBlockHeading = {
    paddingBottom: "5px",
    borderBottom: "4px dotted blue",
    textAlign: "center"
};
const ImageTextBlock = ({ imgSrc, heading, paragragh }) => react_1.default.createElement("section", { className: "container", style: container },
    react_1.default.createElement("img", { src: imgSrc, alt: heading, style: image }),
    react_1.default.createElement("div", { className: "text-block", style: textBlock },
        react_1.default.createElement("h4", { style: textBlockHeading }, heading),
        react_1.default.createElement("p", null, paragragh)));
exports.default = ImageTextBlock;
