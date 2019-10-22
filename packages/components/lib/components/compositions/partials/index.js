"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getScriptContent = (src) => src.replace(/<\/?script.*?>/g, '');
exports.ScriptBuilder = ({ src, attrs = {}, isInline = false }) => {
    let output;
    if (isInline) {
        output = react_1.default.createElement("script", Object.assign({}, attrs, { dangerouslySetInnerHTML: { __html: getScriptContent(src) } }));
    }
    else {
        const scriptSrc = src;
        output = Array.isArray(src) ? (scriptSrc.map((url) => react_1.default.createElement("script", Object.assign({ key: url }, attrs, { src: url })))) : (react_1.default.createElement("script", Object.assign({}, attrs, { src: scriptSrc })));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, output);
};
exports.LinkBuilder = ({ src, attrs = {} }) => {
    const href = src;
    return (react_1.default.createElement(react_1.default.Fragment, null, Array.isArray(href) ? (href.map(url => react_1.default.createElement("link", Object.assign({}, attrs, { href: url })))) : (react_1.default.createElement("link", Object.assign({}, attrs, { href: href })))));
};
exports.MetaTags = ({ tags }) => tags.map(obj => react_1.default.createElement("meta", { name: obj.key, content: obj.value }));
