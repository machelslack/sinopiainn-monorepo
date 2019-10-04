"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var row = {
    "&:after": {
        content: "",
        display: "table",
        clear: "both"
    }
};
var column66 = {
    float: "left",
    width: "66.66666%",
    padding: "20px"
};
var column33 = {
    float: "left",
    width: "33.33333%",
    padding: "20px"
};
var ZigZagRow = function (_a) { return react_1.default.createElement("section", { style: row },
    react_1.default.createElement("div", { style: column66 }),
    react_1.default.createElement("div", { style: column33 })); };
exports.default = ZigZagRow;
