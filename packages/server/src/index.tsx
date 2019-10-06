import React from "react";
import ReactDOMServer from "react-dom/server";
const express = require("express");
const app = express();
const port = 3000;

const props = {
  label: "adadsa",
  value: "aadsadad"
};

app.get("/", (req: any, res: any) => res.send(<div> ada </div>));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
