"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const IconBarItemWithText = ({ iconType }) => core_1.jsx("div", { className: "" },
    core_1.jsx("i", { className: `fa ${!!iconType.class && iconType.class}` }),
    core_1.jsx("p", { className: "service_icon-res-heading" },
        iconType.title,
        " ",
        core_1.jsx("br", null),
        core_1.jsx("small", { className: "service_icon-res-text" },
            iconType.subtitle,
            " ")));
exports.default = IconBarItemWithText;
