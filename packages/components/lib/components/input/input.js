"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@emotion/core");
const TextField = () => (core_1.jsx("div", { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded", "data-upgraded": ",MaterialTextfield", css: core_1.css `
      position: relative;
      font-size: 16px;
      display: inline-block;
      box-sizing: border-box;
      width: 300px;
      max-width: 100%;
      margin: 0;
      padding: 20px 0;
    ` },
    core_1.jsx("input", { className: "mdl-textfield__input", type: "text", id: "sample3", css: core_1.css `
        border: none;
         border-bottom: 1px solid rgba(0, 0, 0, .12);
         display: block;
         font-size: 16px;
         font-family: "Helvetica", "Arial", sans-serif;
         margin: 0;
         padding: 4px 0;
         width: 100%;
         background: 0 0;
         text-align: left;
         color: inherit` }),
    core_1.jsx("label", { className: "mdl-textfield__label", htmlFor: "sample3" }, "Text...")));
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
