"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const app = express();
app.use(cors_1.default());
const port = 3000;
const host = '0.0.0.0';
// register routed endpoints
require('./endpoints/')(app);
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
