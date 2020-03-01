"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const row_1 = require("../../layouts/row");
const container = {
    position: "relative",
    fontFamily: "Arial"
};
const textBlock = core_1.css `
  position: absolute;
  top: 20%;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  width: 25%;
  font-weight: 200;
  opacity: 0.7;
  filter: alpha(opacity=70);
  font-family: "FontspringRegular";
  @media (max-width: 1200px) {
    top: 15%;
    width: 80%;
    margin:0 auto;
    right:0;
    left: 20px;
    text-align:center;
  }
  @media (max-width: 600px) {
    top: 0;
    left: 5px;
  }
  @media (max-width: 992px) {
    top: 7%;
    left: 5px;
  }
`;
/* Position the "next button" to the right */
const image = {
    width: "100%"
};
const textBlockHeading = core_1.css `
  border-bottom: thin dashed #aa9d2e;
  text-align: center;
  font-size: 60px;
  font-weight: 200;
  font-family: "FontspringLight";
  padding-bottom: 5px;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
 }
`;
const textBlockParagraph = core_1.css `
  position: relative;
  top: -40px;
  @media (max-width: 1200px) {
    top: -20px;
  }
  @media (max-width: 583) {
    display: none;
  }
`;
const iconTypes = [
    {
        class: "fas fa-coffee",
        text: "",
        title: "Jamaican Breakfast",
        subtitle: "available when requested"
    },
    {
        class: "fas fa-concierge-bell",
        text: "",
        title: "Personal Cook",
        subtitle: "available during your stay"
    },
    {
        class: "fa fa-car",
        text: "",
        title: "Free Parking",
        subtitle: "for your entire stay"
    },
    {
        class: "fa fa-bus",
        text: "",
        title: "Airport Shuttle",
        subtitle: "available via knutsford express"
    },
    {
        class: "fa fa-wifi",
        text: "",
        title: "WIFI 24/7",
        subtitle: "connection in all rooms "
    },
    {
        class: "fa fa-shopping-basket",
        text: "",
        title: "Caribbean Inspired Baskets",
        subtitle: "for 3 nights stay or more"
    }
];
const ImageTextBlock = ({ imgSrc, heading, paragragh }) => (core_1.jsx("section", { className: "container", style: container },
    core_1.jsx("img", { src: imgSrc, alt: heading, style: image }),
    core_1.jsx("div", { className: "text-block", css: textBlock },
        core_1.jsx("h4", { css: textBlockHeading }, heading),
        core_1.jsx("p", { css: textBlockParagraph }, paragragh)),
    core_1.jsx("div", { css: core_1.css `
         {
          @media (max-width: 992px) {
            display: none;
          }
        }
      ` },
        core_1.jsx(row_1.SixColumnRow, { iconTypes: iconTypes }))));
exports.default = ImageTextBlock;
