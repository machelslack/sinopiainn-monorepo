"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
// register routed endpoints
require('./endpoints/endpoints')(app);
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
