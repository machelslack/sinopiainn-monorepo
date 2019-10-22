"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("react-dom/server");
const emotion_server_1 = require("emotion-server");
const compositions_1 = require("../compositions");
const renderer = (props) => {
    const head = server_1.renderToStaticMarkup(compositions_1.HeadLayout(props));
    // const body = renderToStaticMarkup(BodyLayout(props)).pipe(renderStylesToNodeStream());
    const body = emotion_server_1.renderStylesToString(server_1.renderToString(compositions_1.BodyLayout(props)));
    return { body, head };
};
const homePageRenderer = { type: 'home', renderer };
exports.default = homePageRenderer;
