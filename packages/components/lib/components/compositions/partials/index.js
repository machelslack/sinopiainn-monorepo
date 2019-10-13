"use strict";
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
var react_1 = __importDefault(require("react"));
var getScriptContent = function (src) { return src.replace(/<\/?script.*?>/g, ''); };
exports.ScriptBuilder = function (_a) {
    var src = _a.src, _b = _a.attrs, attrs = _b === void 0 ? {} : _b, _c = _a.isInline, isInline = _c === void 0 ? false : _c;
    var output;
    if (isInline) {
        output = react_1.default.createElement("script", __assign({}, attrs, { dangerouslySetInnerHTML: { __html: getScriptContent(src) } }));
    }
    else {
        var scriptSrc = src;
        output = Array.isArray(src) ? (scriptSrc.map(function (url) { return react_1.default.createElement("script", __assign({ key: url }, attrs, { src: url })); })) : (react_1.default.createElement("script", __assign({}, attrs, { src: scriptSrc })));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, output);
};
exports.LinkBuilder = function (_a) {
    var src = _a.src, _b = _a.attrs, attrs = _b === void 0 ? {} : _b;
    var href = src;
    return (react_1.default.createElement(react_1.default.Fragment, null, Array.isArray(href) ? (href.map(function (url) { return react_1.default.createElement("link", __assign({}, attrs, { href: url })); })) : (react_1.default.createElement("link", __assign({}, attrs, { href: href })))));
};
exports.MetaTags = function (_a) {
    var tags = _a.tags;
    return tags.map(function (obj) { return react_1.default.createElement("meta", { name: obj.key, content: obj.value }); });
};
