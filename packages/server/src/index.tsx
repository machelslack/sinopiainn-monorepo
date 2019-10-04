import React from "react";
import LabelValue from "@sinopiainn/components/lib";
import ReactDOMServer from "react-dom/server";
const express = require("express");
const app = express();
const port = 3000;

const props = {
  label: "adadsa",
  value: "aadsadad"
};

const labelMarkUp = ReactDOMServer.renderToString(React.createElement(LabelValue))

console.log(labelMarkUp);
app.get("/", (req: any, res: any) => res.send(labelMarkUp));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
