import React from "react";
import ReactDOMServer from "react-dom/server";
const express = require("express");
const app = express();
const port = 3000;

// register routed endpoints
require('./endpoints/endpoints')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
