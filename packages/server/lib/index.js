"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lib_1 = __importDefault(require("@sinopiainn/components/lib"));
var server_1 = __importDefault(require("react-dom/server"));
var express = require("express");
var app = express();
var port = 3000;
var props = {
    label: "adadsa",
    value: "aadsadad"
};
var labelMarkUp = server_1.default.renderToString(react_1.default.createElement(lib_1.default));
console.log(labelMarkUp);
app.get("/", function (req, res) { return res.send(labelMarkUp); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
