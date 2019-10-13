"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("react-dom/server");
var compositions_1 = require("../compositions/");
var renderer = function (props) {
    var head = server_1.renderToStaticMarkup(compositions_1.HeadLayout(props));
    var body = server_1.renderToStaticNodeStream(compositions_1.BodyLayout(props));
    return { body: body, head: head };
};
exports.default = { type: 'home', renderer: renderer };
