"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const div = core_1.css `display:table`;
const innerDiv = core_1.css `display:table-cell; vertical-align:middle;`;
const i = core_1.css `font-size:40px;padding:5px; line-height:1;color:#CB410B;`;
const firstLine = core_1.css `font-size:16px;  font-family: 'FontspringRegular';`;
const secondLine = core_1.css `font-size:12px;  font-family: 'FontspringLight';`;
const UnorderedListItem = ({ title, subtitle, icon, image }) => core_1.jsx("li", null,
    core_1.jsx("div", { css: div },
        core_1.jsx("div", { css: innerDiv },
            core_1.jsx("i", { className: `material-icons  mdl-list__item-avatar amenitiesAvatar ${icon ? icon : 'fa fa-check-circle'}`, css: i })),
        core_1.jsx("div", { css: innerDiv },
            core_1.jsx("span", { css: firstLine }, title),
            core_1.jsx("br", null),
            core_1.jsx("span", { css: secondLine }, subtitle))));
exports.default = UnorderedListItem;
