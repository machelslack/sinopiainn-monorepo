"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __importDefault(require("@sinopiainn/components/lib"));
var express = require("express");
var app = express();
var port = 3000;
var props = {
    label: "adadsa",
    value: "aadsadad"
};
console.log(lib_1.default);
app.get("/", function (req, res) { return res.send(lib_1.default); });
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
