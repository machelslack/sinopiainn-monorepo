"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const logo = core_1.css `
display: block;
margin-left: auto;
margin-right: auto;
width:50%;
`;
const Logo = () => core_1.jsx("section", null,
    " ",
    core_1.jsx("img", { css: logo, className: "logo", src: "", alt: "Sinopoa Inn Logo" }));
exports.Logo = Logo;
