"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const static_files_1 = require("./endpoints/static-files");
const app = express();
// static files endpoint addd here for performance to prevent unnecessary firing of all middleware
app.use(static_files_1.staticFilesRouter);
app.use(cors_1.default());
const port = 3000;
const host = '0.0.0.0';
// register routed endpoints
require('./endpoints/')(app);
app.listen(port, host);
console.log(`Running on http://${host}:${port}`);
