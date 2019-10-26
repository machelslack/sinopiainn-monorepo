"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const serialize_javascript_1 = __importDefault(require("serialize-javascript"));
const BodyLayout = (bodyMarkup, pageData) => react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("body", { id: "clientApp" },
        bodyMarkup,
        `<script>window.__INITIAL_DATA__ =
            ${serialize_javascript_1.default(pageData)}</script>`,
        react_1.default.createElement("script", { src: "/app.js", defer: true })));
exports.default = BodyLayout;
