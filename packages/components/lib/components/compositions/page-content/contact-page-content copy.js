"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const row_1 = require("../../../layouts/row");
const form_1 = require("../../form");
//leftcolumn
const leftcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    " ",
    react_1.default.createElement("img", { src: "/w3images/map.jpg", style: { 'width': '100%' } }),
    " ");
//rightcolumn 
const optionsArray = ['option 1', 'option 2', 'option 3'];
const rightcolumn = react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("form", { action: "/action_page.php" },
        react_1.default.createElement("label", null, "First Name"),
        react_1.default.createElement(form_1.TextField, null),
        react_1.default.createElement("label", null, "Last Name"),
        react_1.default.createElement(form_1.TextField, null),
        react_1.default.createElement("label", null, "Country"),
        react_1.default.createElement(form_1.SelectField, { options: optionsArray }),
        react_1.default.createElement("label", null, "Subject"),
        react_1.default.createElement(form_1.TextArea, null),
        react_1.default.createElement(form_1.SubmitButton, null)));
const ContactPageContent = () => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(row_1.TwoColumnRow, { leftcolumn: leftcolumn, rightcolumn: rightcolumn }));
exports.default = ContactPageContent;
