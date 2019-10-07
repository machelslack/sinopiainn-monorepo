"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var medium = {};
var mdlListItem = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: ".04em",
    lineHeight: "1",
    minHeight: "48px",
    "-webkit-flex-direction": "row",
    "-ms-flex-direction": "row",
    "flex-direction": "row",
    "-webkit-flex-wrap": "nowrap",
    "-ms-flex-wrap": "nowrap",
    "flexWrap": "nowrap",
    padding: "16px",
    cursor: "default",
    color: "rgba(0, 0, 0, .87)",
    overflow: "hidden",
    "&.mdl-list__item--three-line": {
        height: "88px"
    },
    "& .mdl-list__item-primary-content": {
        "-webkit-order": 0,
        "-ms-flex-order": 0,
        order: 0,
        "-webkit-flex-grow": 2,
        "-ms-flex-positive": 2,
        "flex-grow": 2,
        "textDecoration": "none",
        height: "52px",
        lineHeight: "20px",
        display: "block"
    },
    "box-sizing": "border-box",
    display: "-webkit-flex -ms-flexbox flex",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
};
var shared = {
    "box-sizing": "border-box",
    display: "-webkit-flex -ms-flexbox flex",
    "-webkit-align-items": "center",
    "-ms-flex-align": "center",
    "align-items": "center"
};
var materialIcons = {
    float: "left",
    "fontFamily": 'Material Icons',
    "fontWeight": 400,
    "fontStyle": "normal",
    "fontSize": "24px",
    "line-height": 1,
    "letter-spacing": "normal",
    "text-transform": "none",
    display: "inline-block",
    "word-wrap": "normal",
    "-moz-font-feature-settings": "liga",
    "font-feature-settings": "liga",
    "-webkit-font-feature-settings": 'liga',
    "-webkit-font-smoothing": "antialiased"
};
var listBody = {
    "fontSize": "14px",
    "fontWeight": 400,
    "letter-spacing": 0,
    "lineHeight": "18px",
    height: "52px",
    color: "rgba(0, 0, 0, .54)",
    display: "block",
    padding: 0
};
var UnorderedListItem = function (_a) {
    var children = _a.children;
    return React.createElement("li", { className: "mdl-list__item mdl-list__item--three-line", style: mdlListItem },
        React.createElement("span", { className: "mdl-list__item-primary-content", style: shared },
            React.createElement("i", { className: "material-icons  mdl-list__item-avatar amenitiesAvatar", style: materialIcons }, "done"),
            React.createElement("span", { style: medium }, "Outdoor Deck And Jerk Pit"),
            React.createElement("span", { className: "mdl-list__item-text-body", style: listBody },
                React.createElement("small", null, "Sit back and relax with views of the cool countryside and a jerk pit ready and wood-stocked perfect for entertaining family and friends during your stay "))));
};
exports.default = UnorderedListItem;
