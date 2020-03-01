"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const image_text_block_1 = require("../../components/image-text-block/");
const row_1 = require("../row");
const image_1 = require("../../components/image/");
const logo_1 = require("../../components/logo");
const contact_form_1 = __importDefault(require("../../components/contact-form/contact-form"));
const iconBarItems = [{ class: "fa-phone", text: "", href: "/contacts" }];
const menuBarItems = ["HOME", "SHOP", "BLOG", "RESERVE"];
const recentBlogPost = [
    {
        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
];
const recentPostTitle = core_1.css `
  text-decoration: none;
  color: white;
`;
const PageLayout = ({ children, pageData }) => (core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css `
        @font-face {
          font-family: "Waiting for the Sunrise";
          font-style: normal;
          font-weight: 400;
          src: local("Waiting for the Sunrise"), local("WaitingfortheSunrise"),
            url(http://fonts.gstatic.com/s/waitingforthesunrise/v7/eNfH7kLpF1PZWpsetF-ha6dq3j6WwEb-fqwg9dMLRYwC1LhKU8qFLLahJuQDJSaO.woff2)
              format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA,
            U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
        }
        @font-face {
          font-family: Fontspring;
          src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-medium.otf);
        }

        @font-face {
          font-family: FontspringLight;
          src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-light.otf);
        }

        @font-face {
          font-family: FontspringRegular;
          src: url(assets/fonts/fontSpring/Fontspring-DEMO-cera-regular.otf);
        }
        * {
          box-sizing: border-box;
        }
        body {
          font-family: FontspringRegular;
          background: #ffffff;
        }
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 700px) {
          .row {
            flex-direction: column;
          }
        }
      ` }),
    core_1.jsx(logo_1.Logo, null),
    core_1.jsx("section", { className: "heroImage" },
        core_1.jsx(image_text_block_1.ImageTextBlock, Object.assign({ imgSrc: pageData }, pageData.imageBlock))),
    core_1.jsx("section", { className: "mainCotent", css: core_1.css `
         {
          background-color: #fbfbfb;
        }
      ` }, children),
    core_1.jsx("section", { className: "footer", css: core_1.css `
         {
          background-color: black;
          padding: 30px;
          font-family: FontspringLight;
          color: white;
        }
      ` },
        core_1.jsx(row_1.Row, null,
            core_1.jsx(row_1.Column, null,
                core_1.jsx("large", null, "We are here"),
                core_1.jsx("br", null),
                core_1.jsx("p", null,
                    core_1.jsx("small", null, " Zion Hill"),
                    core_1.jsx("br", null),
                    core_1.jsx("small", null, " Fairy Hill PO"),
                    core_1.jsx("br", null),
                    core_1.jsx("small", null, " Port Antonio, Jamaica"),
                    core_1.jsx("br", null),
                    core_1.jsx("small", { css: core_1.css `
                 {
                  font-family: Arial;
                }
              ` }, "contact us at 001 (876) 430 6261")),
                core_1.jsx(image_1.ImageZoom, null)),
            core_1.jsx(row_1.Column, null,
                core_1.jsx("p", null, "Contact US"),
                core_1.jsx(contact_form_1.default, null))))));
exports.default = PageLayout;
