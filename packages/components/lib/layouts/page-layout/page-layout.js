"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const image_text_block_1 = require("../../components/image-text-block/");
const icon_bar_1 = require("../../components/icon-bar/");
const menu_1 = require("../../components/menu/");
const datepicker_1 = require("../../components/datepicker");
const row_1 = require("../row");
const image_1 = require("../../components/image/");
const logo_1 = require("../../components/logo");
const compositions_1 = require("../../components/compositions");
const iconBarItems = [
    { class: '', text: '001-876-12345678' },
    { class: 'fa-phone', text: '' },
];
const menuBarItems = [
    'HOME',
    'BLOG',
    'SHOP',
    'RESERVE',
];
const inmageBlockProps = {
    imgSrc: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    heading: 'WELCOME',
    paragragh: `Sinopia Inn would like to welcome you to its rustic hideaway. 
    Here you can experience tropical views with lush
    green hills and skies streaked with colour, 
    not to mention amazing sunsets that will have you feeling the
    vibes to just chill.`,
};
const PageLayout = ({ pageData }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css `
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            background: #ffffff;
          }
          ` }),
    core_1.jsx("section", { className: "topNavigation" },
        core_1.jsx(icon_bar_1.IconBar, null, iconBarItems.map(item => {
            return core_1.jsx(icon_bar_1.IconBarItem, { iconType: item });
        }))),
    core_1.jsx(logo_1.Logo, null),
    core_1.jsx("section", { className: "mainNavigation" },
        core_1.jsx(menu_1.MenuBar, null, menuBarItems.map(item => {
            return core_1.jsx(menu_1.MenuItem, { label: item });
        }))),
    core_1.jsx("section", { className: "heroImage" },
        core_1.jsx(image_text_block_1.ImageTextBlock, Object.assign({}, inmageBlockProps))),
    core_1.jsx("section", { className: "datePicker" },
        core_1.jsx(datepicker_1.DatePicker, null)),
    core_1.jsx("section", { className: "mainCotent" },
        console.log(pageData),
        compositions_1.mainContent[pageData]()),
    core_1.jsx("section", { className: "footer", css: core_1.css `{
            background-color: black;
            padding:30px;
    }` },
        core_1.jsx(row_1.Row, null,
            core_1.jsx(row_1.Column, null,
                core_1.jsx("h3", null, "We are here"),
                core_1.jsx(image_1.ImageZoom, null)),
            core_1.jsx(row_1.Column, null,
                core_1.jsx("h3", null, "Conntect with us"),
                core_1.jsx(icon_bar_1.SocialIconBar, null)),
            core_1.jsx(row_1.Column, null,
                core_1.jsx("h3", null, "Recent posts")),
            core_1.jsx(row_1.Column, null,
                core_1.jsx("h3", null, "Find us at")))));
exports.default = PageLayout;
