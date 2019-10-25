"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const container = {
    position: "relative",
    fontFamily: "Arial",
};
const textBlock = core_1.css `
    position: absolute;
    bottom: 20px;
    right: 20px;
    backgroundColor: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    width: 25%;
    font-weight:200;
    opacity: 0.7;
    filter: alpha(opacity=70)
`;
/* Position the "next button" to the right */
const image = {
    width: "100%"
};
const textBlockHeading = core_1.css `
    borderBottom: thin dashed #AA9D2E;
    textAlign:center;
    color:#AA9D2E;
    font-weight:200;
    font-size:20px;
`;
const ImageTextBlock = ({ imgSrc, heading, paragragh }) => core_1.jsx("section", { className: "container", style: container },
    core_1.jsx("img", { src: imgSrc, alt: heading, style: image }),
    core_1.jsx("div", { className: "text-block", css: textBlock },
        core_1.jsx("h4", { css: textBlockHeading }, heading),
        core_1.jsx("p", null, paragragh)));
exports.default = ImageTextBlock;
