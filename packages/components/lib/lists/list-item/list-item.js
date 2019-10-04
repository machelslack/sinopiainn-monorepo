"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var listSpan = {
    height: "auto!important",
    'overflow-y': " hidden !important",
    '-ms-overflow-style': "none"
};
var listAvatar = {
    color: "#cb410b",
    'background-color': "transparent"
};
var amenitiesAvatar = {
    color: "white!important",
    'background-color': "#cb410b!important",
    float: "left"
};
var listBody = {
    'font- size': "14px",
    'font-weight': "400",
    'letter-spacing': 0,
    'line-height': "18px",
    height: "52px",
    color: "rgba(0, 0, 0, .54)",
    display: "block",
    padding: 0
};
var mdlListItem = {
    'font-family': "Roboto, Helvetica, Arial, sans-serif",
    'font-size': "16px",
    'font-weight': "400",
    'letter-spacing': " .04em",
    'line - height': 1,
    'min - height': "48px",
    '-webkit-flex-direction': "row",
    '-ms-flex-direction': "row",
    'flex-direction': "row",
    '-webkit-flex-wrap': "nowrap",
    '-ms-flex-wrap': "nowrap",
    'flex-wrap': "nowrap",
    padding: "16px",
    cursor: "default",
    color: "rgba(0, 0, 0, .87)",
    overflow: " hidden",
    'box-sizing': " border - box",
    display: "-webkit-flex -ms-flexbox flex",
    '-webkit-align-items': "center",
    '-ms-flex-align': "center",
    'align-items': "center",
};
var mdlListItemThreeLine = {
    height: "88px"
};
var UnorderedListItem = function (_a) {
    var children = _a.children;
    return react_1.default.createElement("li", { style: [mdlListItem, mdlListItemThreeLine] },
        react_1.default.createElement("span", { style: listSpan },
            react_1.default.createElement("i", { style: [listAvatar, amenitiesAvatar] }, " done"),
            react_1.default.createElement("medium", null, "Complimentary Breakfast"),
            react_1.default.createElement("span", { style: listBody },
                react_1.default.createElement("small", null, "Enjoy our traditional Jamaican breakfast included as part of our nightly room rates "))));
};
exports.default = UnorderedListItem;
