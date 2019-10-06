"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var express = require("express");
var app = express();
var port = 3000;
var props = {
    label: "adadsa",
    value: "aadsadad"
};
app.get("/", function (req, res) { return res.send(react_1.default.createElement("div", null, " ada ")); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
