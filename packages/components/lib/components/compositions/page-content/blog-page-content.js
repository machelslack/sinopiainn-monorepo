"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
const core_1 = require("@emotion/core");
const react_1 = __importStar(require("react"));
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
    display: "table-cell",
    width: "75%",
};
/* Right column */
const rightcolumnStyles = {
    display: "table-cell",
    width: "25%",
    "paddingLeft": "20px",
};
/* Clear floats after the columns */
const rowStyles = {
    display: "table",
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
const header = () => react_1.default.createElement('large', {}, 'Blog Name');
const blogPost = [
    {
        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
];
const popularBlogPost = [
    {
        title: "TITLE HEADING",
        description: "Title description",
        postDate: " Dec 7, 2017",
        imageSrc: "",
        opening: "Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    }
];
//leftcolumn
const leftcolumn = core_1.jsx(react_1.default.Fragment, null, blogPost.map((post) => core_1.jsx(blog_card_1.BlogCard, null,
    core_1.jsx("h2", null, post.title),
    core_1.jsx("h5", null,
        post.description,
        ",",
        post.postDate),
    core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, { imageSrc: post.imageSrc }),
    core_1.jsx("p", null, post.opening))));
//rightcolumn 
const rightcolumn = core_1.jsx(react_1.default.Fragment, null,
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h3", null, "Popular Post"),
        popularBlogPost.map((post) => core_1.jsx(blog_image_placeholder_1.BlogImagePlaceholder, { imageSrc: post.imageSrc }))),
    core_1.jsx(blog_card_1.BlogCard, null,
        core_1.jsx("h3", null, "Follow Me"),
        core_1.jsx("p", null, "Some text..")));
class BlogPageContent extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (core_1.jsx(react_1.default.Fragment, null,
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
    ` }, rightcolumn))));
    }
}
exports.default = BlogPageContent;
