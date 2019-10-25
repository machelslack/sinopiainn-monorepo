"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const iconBar = core_1.css `
    position: relative;
    a {
    display: inline-block;
    text-align: center;
    padding: 10px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
    "& :hover" {
        background-color: #000
    }
    margin:3px;
    }
    
`;
const facebook = {
    background: "#3B5998",
    color: "white",
    "&:hover": {
        "background-color": "#000"
    }
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
exports.SocialIconBar = ({}) => core_1.jsx("div", { css: iconBar },
    core_1.jsx("a", { href: "#", style: facebook },
        core_1.jsx("i", { className: "fa fa-facebook" })),
    core_1.jsx("a", { href: "#", style: twitter },
        core_1.jsx("i", { className: "fa fa-twitter" })),
    core_1.jsx("a", { href: "#", style: google },
        core_1.jsx("i", { className: "fa fa-google" })),
    core_1.jsx("a", { href: "#", style: youtube },
        core_1.jsx("i", { className: "fa fa-youtube" })));
exports.default = exports.SocialIconBar;
