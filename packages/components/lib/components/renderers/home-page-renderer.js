"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("react-dom/server");
var emotion_server_1 = require("emotion-server");
var compositions_1 = require("../compositions");
var renderer = function (props) {
    var head = server_1.renderToStaticMarkup(compositions_1.HeadLayout(props));
    // const body = renderToStaticMarkup(BodyLayout(props)).pipe(renderStylesToNodeStream());
    var body = emotion_server_1.renderStylesToString(server_1.renderToString(compositions_1.BodyLayout(props)));
    return { body: body, head: head };
};
var homePageRenderer = { type: 'home', renderer: renderer };
exports.default = homePageRenderer;
