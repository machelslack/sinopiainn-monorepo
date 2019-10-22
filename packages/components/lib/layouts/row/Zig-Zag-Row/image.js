"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const breakpoints = [1000];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const img = {
    display: "block",
    height: "auto",
    'max-width': "100%"
};
const ZigZagRowImage = ({}) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("img", { src: "/w3images/img_app.jpg", width: "335", height: "471", style: img, css: {
            [mq[0]]: {
                margin: "auto",
            },
        } }));
exports.default = ZigZagRowImage;
