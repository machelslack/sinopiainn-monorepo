"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importDefault(require("react"));
const blog_card_1 = require("../../blog-card");
const blog_image_placeholder_1 = require("../../blog-image-placeholder");
/* Header/Blog Title */
const headerStyles = {
    padding: "30px",
    "fontSize": "40px",
    "textAlign": "center",
    backgroundColor: "white",
};
/* Create two unequal columns that floats next to each other */
/* Left column */
const leftcolumnStyles = {
    float: "left",
    width: "75%",
};
/* Right column */
const rightcolumnStyles = {
    float: "left",
    width: "25%",
    "paddingLeft": "20px",
};
/* Clear floats after the columns */
const rowStyles = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both",
    }
};
/* Footer */
const footerStyles = {
    padding: "20px",
    "textAlign": "center",
    backgroundColor: "#ddd",
    "marginTop": "20px",
};
//header 
const header = () => react_1.default.createElement('h1', {}, 'Blog Name');
//leftcolumn
const leftcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h2", null, "TITLE HEADING"),
        core_1.jsx("h5", null, "Title description, Dec 7, 2017"),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null),
        core_1.jsx("p", null, "Some text.."),
        core_1.jsx("p", null, "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.")),
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h2", null, "TITLE HEADING"),
        core_1.jsx("h5", null, "Title description, Sep 2, 2017"),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null),
        core_1.jsx("p", null, "Some text.."),
        core_1.jsx("p", null, "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.")));
//rightcolumn 
const rightcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h2", null, "About Me"),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null),
        core_1.jsx("p", null, "Some text about me in culpa qui officia deserunt mollit anim..")),
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h3", null, "Popular Post"),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null),
        core_1.jsx("br", null),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null),
        core_1.jsx("br", null),
        core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, null)),
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h3", null, "Follow Me"),
        core_1.jsx("p", null, "Some text..")));
const BlogPageContent = () => core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(core_1.Global, { styles: core_1.css `
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Arial;
            padding: 20px;
            background: #f1f1f1;
          }
          ` }),
    core_1.jsx("section", { style: headerStyles, className: "header" }, header()),
    core_1.jsx("section", { style: rowStyles, className: "row" },
        core_1.jsx("section", { style: leftcolumnStyles, className: "leftcolumn", css: core_1.css `
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    ` }, leftcolumn),
        core_1.jsx("section", { style: rightcolumnStyles, className: "rightcolumn", css: core_1.css `
      @media screen and (max-width: 800px) {
        width: 100%;
    padding: 0;
      }
    ` }, rightcolumn)));
exports.default = BlogPageContent;
