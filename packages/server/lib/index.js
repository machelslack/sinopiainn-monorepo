"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 3000;
// register routed endpoints
require('./endpoints/endpoints')(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
