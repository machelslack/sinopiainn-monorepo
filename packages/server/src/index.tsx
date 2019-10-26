import React from "react";
import ReactDOMServer from "react-dom/server";
import cors from "cors";
const express = require("express");
const app = express();

app.use(cors())

const port = 3000;
const host = '0.0.0.0';

// register routed endpoints
require('./endpoints/')(app);

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);