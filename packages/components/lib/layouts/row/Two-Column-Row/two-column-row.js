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
/* Create two columns that float next to eachother */
var column = {
    "float": "left",
    "width": "50%",
    "marginTop": "6px",
    "padding": "20px"
};
/* Clear floats after the columns */
var row = {
    "&:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    }
};
var breakpoints = [600];
var mq = breakpoints.map(function (bp) { return "@media (min-width: " + bp + "px)"; });
var TwoColumnRow = function (_a) {
    var leftcolumn = _a.leftcolumn, rightcolumn = _a.rightcolumn;
    return core_1.jsx(react_1.default.Fragment, null,
        core_1.jsx(core_1.Global, { styles: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        body {\n            font-family: Arial, Helvetica, sans-serif;\n          }\n          \n          * {\n            box-sizing: border-box;\n          }\n          "], ["\n        body {\n            font-family: Arial, Helvetica, sans-serif;\n          }\n          \n          * {\n            box-sizing: border-box;\n          }\n          "]))) }),
        core_1.jsx("section", { style: row, className: "row" },
            core_1.jsx("div", { style: column, className: "leftcolummn", css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      [mq[0]]: {\n        width: 100%;\n        margin-top: 0;\n      },\n    "], ["\n      [mq[0]]: {\n        width: 100%;\n        margin-top: 0;\n      },\n    "]))) }, leftcolumn),
            core_1.jsx("div", { style: column, className: "rightcolummn", css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n   [mq[0]]: {\n    width: 100%;\n    margin-top: 0;\n  },\n    "], ["\n   [mq[0]]: {\n    width: 100%;\n    margin-top: 0;\n  },\n    "]))) }, rightcolumn)));
};
exports.default = TwoColumnRow;
var templateObject_1, templateObject_2, templateObject_3;
