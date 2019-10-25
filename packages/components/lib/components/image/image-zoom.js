"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const zoom = core_1.css `
  padding: 50px;
  background-color: green;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  ":hover": {
    background-color: blue;
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
const ImageZoom = () => core_1.jsx("div", { className: "zoom", css: zoom });
exports.default = ImageZoom;
