"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const iconBarItem = core_1.css `
float: right;
textAlign: center;
transition: all 0.3s ease;
color: #CB410B;
fontSize: 20px;
fontFamily: FontspringRegular;
text-decoration: none;
  i {
    display: table;
    padding:0px!important;
    span {
        color:black;
        cursor: pointer;
        display: table-cell;
        vertical-align:middle;
        font-weight:200;
      }
  }
`;
const IconBarItem = ({ iconType }) => core_1.jsx("a", { css: iconBarItem, className: "iconBarItem", href: iconType.href },
    core_1.jsx("i", { className: `fa ${!!iconType.class && iconType.class}` },
        "\u00A0 ",
        core_1.jsx("span", null,
            " ",
            iconType.text,
            " ")));
exports.default = IconBarItem;
