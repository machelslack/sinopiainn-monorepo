"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const zoomContainer = core_1.css `
height:auto;
display: flex;
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
const divStyle = core_1.css `overflow:hidden;`;
const mapDivStyle = core_1.css `height:100%;width:100%;`;
const iframeStyles = core_1.css `margin:0px; flex-grow : 1;`;
const mapOuterDiv = core_1.css `height:auto;display: flex;`;
const ImageZoom = () => core_1.jsx("section", { css: zoomContainer },
    core_1.jsx("iframe", { width: '100%', height: '100%', id: 'mapcanvas', src: "https://maps.google.com/maps?q=Sinopia%20Inn,%20Zion%20Hill,%20Fairy%20Hill%20PO,%20Port%20Antonio,%20Jamaica&t=&z=10&ie=UTF8&iwloc=&output=embed", 
        // frameborder='0' 
        scrolling: 'no', 
        // marginheight='0' 
        // marginwidth='0'
        css: iframeStyles },
        core_1.jsx("div", { className: "zxos8_gm" },
            "new website ",
            core_1.jsx("a", { rel: "bookmark", href: "https://www.codeguesser.co.uk/ao.com" }, "called Code Guesser"),
            "tries to find vouchers by guessing"),
        core_1.jsx("div", { css: divStyle },
            core_1.jsx("div", { id: 'gmap_canvas', css: mapDivStyle })),
        core_1.jsx("div", null,
            core_1.jsx("small", null,
                "Powered by ",
                core_1.jsx("a", { href: "https://www.embedgooglemap.co.uk" }, "Embed Google Map")))));
exports.default = ImageZoom;
