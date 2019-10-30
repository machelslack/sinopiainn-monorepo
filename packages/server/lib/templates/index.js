"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const emotion_server_1 = require("emotion-server");
const react_router_dom_1 = require("react-router-dom");
const renderers_1 = require("@sinopiainn/components/lib/components/renderers/");
const App_1 = __importDefault(require("@sinopiainn/components/lib/client/App"));
exports.generateTemplate = (pageData = {}, req) => {
    const head = server_1.renderToStaticMarkup(renderers_1.renderer.head(pageData));
    const body = emotion_server_1.renderStylesToString(server_1.renderToString(renderers_1.renderer.body(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: {} },
        react_1.default.createElement(App_1.default, { pageData: pageData })), req)));
    const template = `<!DOCTYPE html><html>${head}${body}</html>`;
    return template;
};
