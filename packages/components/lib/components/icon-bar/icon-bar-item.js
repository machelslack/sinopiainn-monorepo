"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const iconBarItem = {
    float: "right",
    width: "20%",
    textAlign: "center",
    padding: "5px 0",
    transition: "all 0.3s ease",
    color: "white",
    fontSize: "20px",
    '&:hover': {
        'background-color': "#ddd",
        color: "black"
    },
    fontFamily: "Arial"
};
const IconBarItem = ({ iconType }) => core_1.jsx("a", { style: iconBarItem, className: "iconBarItem" },
    core_1.jsx("i", { className: `fa ${!!iconType.class && iconType.class}` },
        "\u00A0 ",
        iconType.text));
exports.default = IconBarItem;
