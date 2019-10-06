"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
var breakpoints = [1000];
var mq = breakpoints.map(function (bp) { return "@media (min-width: " + bp + "px)"; });
var img = {
    display: "block",
    height: "auto",
    'max-width': "100%"
};
var ZigZagRowImage = function (_a) {
    var _b;
    return core_1.jsx(react_1.default.Fragment, null,
        core_1.jsx("img", { src: "/w3images/img_app.jpg", width: "335", height: "471", style: img, css: (_b = {},
                _b[mq[0]] = {
                    margin: "auto",
                },
                _b) }));
};
exports.default = ZigZagRowImage;
