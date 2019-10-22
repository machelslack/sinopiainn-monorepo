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
const slideshow_1 = require("../../components/slideshow");
const iconBarItems = [
    { class: 'fa-phone', text: '001-876-12345678' },
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
const firstRowLeftcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("h1", null, " SINOPIA INN"),
    " ",
    core_1.jsx("p", null, " Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It\u2019s not like you\u2019re turning your back on traditional island vacations that include all-inclusive beaches and drinks, but it is a positive alternative experience of the cool countryside, its beaches and local culture."),
    " ");
const firstRowRightcolumn = core_1.jsx(slideshow_1.SlideShowContainer, null,
    core_1.jsx(slideshow_1.SlideShowSlide, null),
    core_1.jsx(slideshow_1.SlideShowDots, null));
const secondRowLeftcolumn = core_1.jsx(slideshow_1.SlideShowContainer, null,
    core_1.jsx(slideshow_1.SlideShowSlide, null),
    core_1.jsx(slideshow_1.SlideShowDots, null));
const secondRowRightcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx("h1", null, " SINOPIA INN"),
    " ",
    core_1.jsx("p", null, " Set on two acres of lush green gardens, Sinopia Inn is an early twentieth century house refurbished with modern interior decor that still evokes a feeling of going back in time. The abundance of palm trees and other Jamaican flora make it a stunning hideaway in Portland, Jamaica. The units are perfect for families, couples or groups to use as a base to explore the natural parish of Portland, Jamaica. Here you are able to experience tranquil nights and great accommodation alternatives to the resort locations of Montego Bay, Ocho Rios and Negril. It\u2019s not like you\u2019re turning your back on traditional island vacations that include all-inclusive beaches and drinks, but it is a positive alternative experience of the cool countryside, its beaches and local culture."),
    " ");
const PageLayout = ({ children }) => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css `
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            background: #f1f1f1;
          }
          ` }),
    core_1.jsx("section", { className: "topNavigation" },
        core_1.jsx(icon_bar_1.IconBar, null, iconBarItems.map(item => {
            return core_1.jsx(icon_bar_1.IconBarItem, { iconType: item });
        }))),
    core_1.jsx("section", { className: "heroImage" },
        core_1.jsx(image_text_block_1.ImageTextBlock, Object.assign({}, inmageBlockProps))),
    core_1.jsx("section", { className: "mainNavigation" },
        core_1.jsx(menu_1.MenuBar, null, menuBarItems.map(item => {
            return core_1.jsx(menu_1.MenuItem, { label: item });
        }))),
    core_1.jsx("section", { className: "datePicker" },
        core_1.jsx(datepicker_1.DatePicker, null)),
    core_1.jsx("section", { className: "mainCotent" },
        core_1.jsx(row_1.TwoColumnRow, { leftcolumn: firstRowLeftcolumn, rightcolumn: firstRowRightcolumn }),
        core_1.jsx(row_1.TwoColumnRow, { leftcolumn: secondRowLeftcolumn, rightcolumn: secondRowRightcolumn })),
    core_1.jsx("section", { className: "footer" }));
exports.default = PageLayout;
