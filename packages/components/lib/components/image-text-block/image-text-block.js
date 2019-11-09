"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const row_1 = require("../../layouts/row");
const container = {
    position: "relative",
    fontFamily: "Arial",
};
const textBlock = core_1.css `
    position: absolute;
    top: 30%;
    right: 20px;
    background-color: black;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    width: 25%;
    font-weight:200;
    opacity: 0.7;
    filter: alpha(opacity=70);
    font-family: 'FontspringRegular';
`;
/* Position the "next button" to the right */
const image = {
    width: "100%"
};
const textBlockHeading = core_1.css `
    border-bottom: thin dashed #AA9D2E;
    text-align:center;
  font-size:xxx-large;
  font-weight:200;
  font-family: 'FontspringLight';
  padding-bottom:5px;
`;
const textBlockParagraph = core_1.css `
position:relative;top:-40px;
`;
const iconTypes = [
    { class: 'fa fa-coffee', text: '', title: 'Jamaican Breakfast', subtitle: 'included in our room rates' },
    { class: 'fa fa-shield', text: '', title: 'On Site Security', subtitle: 'during your stay' },
    { class: 'fa fa-car', text: '', title: 'Free Parking', subtitle: 'for your entire stay' },
    { class: 'fa fa-bus', text: '', title: 'Airport Shuttle', subtitle: 'for all guests' },
    { class: 'fa fa-wifi', text: '', title: 'WIFI 24/7', subtitle: 'connection in all rooms ' },
    { class: 'fa fa-shopping-basket', text: '', title: 'Caribbean Inspired Baskets', subtitle: 'for 3 nights stay or more' },
];
const ImageTextBlock = ({ imgSrc, heading, paragragh }) => core_1.jsx("section", { className: "container", style: container },
    core_1.jsx("img", { src: imgSrc, alt: heading, style: image }),
    core_1.jsx("div", { className: "text-block", css: textBlock },
        core_1.jsx("h4", { css: textBlockHeading }, heading),
        core_1.jsx("p", { css: textBlockParagraph }, paragragh)),
    core_1.jsx(row_1.SixColumnRow, { iconTypes: iconTypes }));
exports.default = ImageTextBlock;
