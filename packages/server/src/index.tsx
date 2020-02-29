import React from "react";
import ReactDOMServer from "react-dom/server";
import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");

import { staticFilesRouter } from "./endpoints/static-files";

const app = express();

// static files endpoint addd here for performance to prevent unnecessary firing of all middleware
app.use(staticFilesRouter);
app.use(cors());
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
const port = process.env.PORT || 3000;
const host = "0.0.0.0";

// register routed endpoints
require("./endpoints/")(app);

app.listen(port, host);

console.log(`Running on http://${host}:${port}`);
