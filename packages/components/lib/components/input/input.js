"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var TextField = function () { return (core_1.jsx("div", { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded", "data-upgraded": ",MaterialTextfield", css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n      font-size: 16px;\n      display: inline-block;\n      box-sizing: border-box;\n      width: 300px;\n      max-width: 100%;\n      margin: 0;\n      padding: 20px 0;\n    "], ["\n      position: relative;\n      font-size: 16px;\n      display: inline-block;\n      box-sizing: border-box;\n      width: 300px;\n      max-width: 100%;\n      margin: 0;\n      padding: 20px 0;\n    "]))) },
    core_1.jsx("input", { className: "mdl-textfield__input", type: "text", id: "sample3", css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border: none;\n         border-bottom: 1px solid rgba(0, 0, 0, .12);\n         display: block;\n         font-size: 16px;\n         font-family: \"Helvetica\", \"Arial\", sans-serif;\n         margin: 0;\n         padding: 4px 0;\n         width: 100%;\n         background: 0 0;\n         text-align: left;\n         color: inherit"], ["\n        border: none;\n         border-bottom: 1px solid rgba(0, 0, 0, .12);\n         display: block;\n         font-size: 16px;\n         font-family: \"Helvetica\", \"Arial\", sans-serif;\n         margin: 0;\n         padding: 4px 0;\n         width: 100%;\n         background: 0 0;\n         text-align: left;\n         color: inherit"]))) }),
    core_1.jsx("label", { className: "mdl-textfield__label", htmlFor: "sample3" }, "Text..."))); };
// const TextField: React.FunctionComponent<{}> = () => (
//   <p css={{ color: "red" }}>
//     I have red text. And some{" "}
//     <span
//       css={css`
//         color: blue;
//       `}
//     >
//       blue
//     </span>{" "}
//     text.
//   </p>
// );
exports.default = TextField;
var templateObject_1, templateObject_2;
