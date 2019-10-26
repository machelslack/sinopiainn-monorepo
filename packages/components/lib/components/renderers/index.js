"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const emotion_server_1 = require("emotion-server");
const compositions_1 = require("../compositions");
const App_1 = __importDefault(require("../../client/App"));
exports.renderer = (pageData) => {
    const head = server_1.renderToStaticMarkup(compositions_1.HeadLayout(pageData));
    // const body = renderToStaticMarkup(BodyLayout(props)).pipe(renderStylesToNodeStream());
    console.log(`🍻`, pageData);
    // const bodyMarkup = renderToString(<App pageData={pageData}/>);
    const body = emotion_server_1.renderStylesToString(server_1.renderToString(compositions_1.BodyLayout(react_1.default.createElement(App_1.default, { pageData: pageData }), pageData)));
    return { body, head };
};
