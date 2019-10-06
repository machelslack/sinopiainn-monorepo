"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var breakpoints = [1000];
var mq = breakpoints.map(function (bp) { return "@media (min-width: " + bp + "px)"; });
var row = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both"
    }
};
var column66 = {
    float: "left",
    width: "66.66666%",
    padding: "20px"
};
var column33 = {
    float: "left",
    width: "33.33333%",
    padding: "20px"
};
var ZigZagRow = function (_a) {
    var _b, _c;
    return core_1.jsx("section", { style: row },
        core_1.jsx("div", { style: column66, css: (_b = {},
                _b[mq[0]] = {
                    width: "100%",
                    'text-align': "center",
                },
                _b) }),
        core_1.jsx("div", { style: column33, css: (_c = {},
                _c[mq[0]] = {
                    width: "100%",
                    'text-align': "center",
                },
                _c) }));
};
exports.default = ZigZagRow;
