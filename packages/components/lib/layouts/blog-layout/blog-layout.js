"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importDefault(require("react"));
/* Header/Blog Title */
var headerStyles = {
    padding: "30px",
    "fontSize": "40px",
    "textAlign": "center",
    backgroundColor: "white",
};
/* Create two unequal columns that floats next to each other */
/* Left column */
var leftcolumnStyles = {
    float: "left",
    width: "75%",
};
/* Right column */
var rightcolumnStyles = {
    float: "left",
    width: "25%",
    "paddingLeft": "20px",
};
/* Clear floats after the columns */
var rowStyles = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both",
    }
};
/* Footer */
var footerStyles = {
    padding: "20px",
    "textAlign": "center",
    backgroundColor: "#ddd",
    "marginTop": "20px",
};
var BlogLayout = function (_a) {
    var header = _a.header, leftcolumn = _a.leftcolumn, rightcolumn = _a.rightcolumn;
    return core_1.jsx(react_1.default.Fragment, null,
        core_1.jsx(core_1.Global, { styles: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          * {\n            box-sizing: border-box;\n          }\n          body {\n            font-family: Arial;\n            padding: 20px;\n            background: #f1f1f1;\n          }\n          "], ["\n          * {\n            box-sizing: border-box;\n          }\n          body {\n            font-family: Arial;\n            padding: 20px;\n            background: #f1f1f1;\n          }\n          "]))) }),
        core_1.jsx("section", { style: headerStyles, className: "header" }, header()),
        core_1.jsx("section", { style: rowStyles, className: "row" },
            core_1.jsx("section", { style: leftcolumnStyles, className: "leftcolumn", css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @media screen and (max-width: 800px) {\n        width: 100%;\n    padding: 0;\n      }\n    "], ["\n      @media screen and (max-width: 800px) {\n        width: 100%;\n    padding: 0;\n      }\n    "]))) }, leftcolumn),
            core_1.jsx("section", { style: rightcolumnStyles, className: "rightcolumn", css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      @media screen and (max-width: 800px) {\n        width: 100%;\n    padding: 0;\n      }\n    "], ["\n      @media screen and (max-width: 800px) {\n        width: 100%;\n    padding: 0;\n      }\n    "]))) }, rightcolumn)),
        core_1.jsx("section", { style: footerStyles, className: "footer" }));
};
exports.default = BlogLayout;
var templateObject_1, templateObject_2, templateObject_3;
