"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
var image_text_block_1 = require("../../components/image-text-block/");
var icon_bar_1 = require("../../components/icon-bar/");
var menu_1 = require("../../components/menu/");
var iconBarItems = [
    'fa-phone',
];
var menuBarItems = [
    'HOME',
    'BLOG',
    'SHOP',
    'RESERVE',
];
var inmageBlockProps = {
    imgSrc: '',
    heading: 'WELCOME',
    paragragh: "Sinopia Inn would like to welcome you to its rustic hideaway. Here you can experience tropical views with lush\n    green hills and skies streaked with colour, not to mention amazing sunsets that will have you feeling the\n    vibes to just chill.",
};
var PageLayout = function () { return core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          * {\n            box-sizing: border-box;\n          }\n          body {\n            font-family: Arial;\n            padding: 20px;\n            background: #f1f1f1;\n          }\n          "], ["\n          * {\n            box-sizing: border-box;\n          }\n          body {\n            font-family: Arial;\n            padding: 20px;\n            background: #f1f1f1;\n          }\n          "]))) }),
    core_1.jsx("section", { className: "topNavigation" },
        core_1.jsx(icon_bar_1.IconBar, null,
            iconBarItems.map(function (item) {
                return core_1.jsx(icon_bar_1.IconBarItem, { iconType: item });
            }),
            core_1.jsx("i", null, " 001 (876) xxxx"))),
    core_1.jsx("section", { className: "heroImage" },
        core_1.jsx(image_text_block_1.ImageTextBlock, __assign({}, inmageBlockProps))),
    core_1.jsx("section", { className: "mainNavigation" },
        core_1.jsx(menu_1.MenuBar, null, menuBarItems.map(function (item) {
            return core_1.jsx(menu_1.MenuItem, { label: item });
        }))),
    core_1.jsx("section", { className: "datePicker" }),
    core_1.jsx("section", { className: "mainCotent" }),
    core_1.jsx("section", { className: "footer" })); };
exports.default = PageLayout;
var templateObject_1;
