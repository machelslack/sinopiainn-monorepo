"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const breakpoints = [1000];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
const row = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both"
    }
};
const column66 = {
    float: "left",
    width: "66.66666%",
    padding: "20px"
};
const column33 = {
    float: "left",
    width: "33.33333%",
    padding: "20px"
};
const ZigZagRow = ({}) => core_1.jsx("section", { style: row },
    core_1.jsx("div", { style: column66, css: {
            [mq[0]]: {
                width: "100%",
                'text-align': "center",
            },
        } }),
    core_1.jsx("div", { style: column33, css: {
            [mq[0]]: {
                width: "100%",
                'text-align': "center",
            },
        } }));
exports.default = ZigZagRow;
