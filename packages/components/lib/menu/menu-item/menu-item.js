"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles = {
    cursor: "pointer",
    fontSize: 17,
    padding: "14px 16px",
    margin: 10,
    display: "block",
    color: "black",
    border: "red thin solid",
    'text-align': "center",
    'text-decoration': "none",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
    float: "left"
};
var MenuItem = function (_a) {
    var label = _a.label;
    return core_1.jsx("a", { css: styles },
        " ",
        label);
};
exports.default = MenuItem;
