"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var container = {
    position: "relative",
    fontFamily: "Arial"
};
var textBlock = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: "black",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px"
};
/* Position the "next button" to the right */
var image = {
    width: "100%"
};
var ImageTextBlock = function (_a) {
    var imgSrc = _a.imgSrc, heading = _a.heading, paragragh = _a.paragragh;
    return react_1.default.createElement("section", { className: "container", style: container },
        react_1.default.createElement("img", { src: imgSrc, alt: heading, style: image }),
        react_1.default.createElement("div", { className: "text-block", style: textBlock },
            react_1.default.createElement("h4", null, heading),
            react_1.default.createElement("p", null, paragragh)));
};
exports.default = ImageTextBlock;
