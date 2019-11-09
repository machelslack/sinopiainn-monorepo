"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const row_1 = require("../../../layouts/row");
const form_1 = require("../../form");
const divStyle = core_1.css `overflow:hidden;`;
const mapDivStyle = core_1.css `height:100%;width:100%;`;
const iframeStyles = core_1.css `margin:0px; flex-grow : 1;`;
const mapOuterDiv = core_1.css `height:auto;display: flex;`;
//leftcolumn
const leftcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("iframe", { width: '100%', height: '100%', id: 'mapcanvas', src: "https://maps.google.com/maps?q=Zion%20Hill,%20Fairy%20Hill%20PO,%20Port%20Antonio,%20Jamaica&t=&z=10&ie=UTF8&iwloc=&output=embed", 
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
//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];
const rightcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("form", { action: "/action_page.php" },
        core_1.jsx("label", null, "First Name"),
        core_1.jsx(form_1.TextField, null),
        core_1.jsx("label", null, "Last Name"),
        core_1.jsx(form_1.TextField, null),
        core_1.jsx("label", null, "Enquiry"),
        core_1.jsx(form_1.TextArea, null),
        core_1.jsx(form_1.SubmitButton, null)));
const ContactPageContent = () => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(row_1.FlexTwoColumnRow, { leftcolumn: leftcolumn, rightcolumn: rightcolumn }));
exports.default = ContactPageContent;
