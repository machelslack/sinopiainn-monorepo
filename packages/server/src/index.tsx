import React from "react";
import ReactDOMServer from "react-dom/server";
const express = require("express");
const app = express();
// Constants
const port = 3000;
const host = '0.0.0.0';

// register routed endpoints
require('./endpoints/')(app);

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);