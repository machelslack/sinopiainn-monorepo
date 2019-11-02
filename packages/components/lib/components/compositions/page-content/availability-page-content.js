"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const row_1 = require("../../../layouts/row");
//leftcolumn
const ul = core_1.css ` list-style:none; width:100%; `;
const div = core_1.css `display:table`;
const innerDiv = core_1.css `display:table-cell; vertical-align:middle;`;
const i = core_1.css `font-size:50px;padding:5px; line-height:1;`;
const firstLine = core_1.css `font-size:16px`;
const secondLine = core_1.css `font-size:11px`;
{ /* <ul class="middle">
  <li>
    <i class="icon-cog icon-2x"></i> <a href="#">very long multiline item one</a>
  </li>
  <li>
    <i class="icon-pencil icon-2x"></i> <a href="#">very long multiline item two</a>
  </li>
</ul> */
}
const leftcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("ul", { css: ul },
        core_1.jsx("li", null,
            core_1.jsx("div", { css: div },
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar fa fa-check-circle", css: i })),
                core_1.jsx("div", { css: innerDiv },
                    core_1.jsx("span", { css: firstLine }, "Complimentary Breakfast"),
                    core_1.jsx("br", null),
                    core_1.jsx("span", { css: secondLine }, "Enjoy our traditional Jamaican breakfast included as part of our nightly room rates"))))));
//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];
const rightcolumn = core_1.jsx(react_1.default.Fragment, null);
const AvailabilityPageContent = () => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(row_1.TwoColumnRow, { leftcolumn: leftcolumn, rightcolumn: rightcolumn }));
exports.default = AvailabilityPageContent;
