"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
var iconBarItem = {
    float: "left",
    width: "20%",
    textAlign: "center",
    padding: "12px 0",
    transition: "all 0.3s ease",
    color: "white",
    fontSize: "36px",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
};
var IconBarItem = function (_a) {
    var iconType = _a.iconType;
    return core_1.jsx("a", { style: iconBarItem, className: "iconBarItem" },
        core_1.jsx("i", { className: "fa " + iconType }));
};
exports.default = IconBarItem;
