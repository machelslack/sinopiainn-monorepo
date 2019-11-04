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
const logoSection = core_1.css `background-color:#f1f1f1;`;
const Logo = () => core_1.jsx("section", { css: logoSection },
    " ",
    core_1.jsx("img", { css: logo, className: "logo", src: "assets/images/logo/logo.png", alt: "Sinopoa Inn Logo" }));
exports.Logo = Logo;
