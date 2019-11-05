"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const zoomContainer = core_1.css `

.zoom {
  padding: 50px;
  background-color: blue;
  transition: transform .2s;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
  .zoom:hover: {
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5); 
  }
`;
const ImageZoom = () => core_1.jsx("section", { css: zoomContainer },
    " ",
    core_1.jsx("div", { className: "zoom" }),
    "  ");
exports.default = ImageZoom;
