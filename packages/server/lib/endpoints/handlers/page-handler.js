"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const routes_1 = require("@sinopiainn/components/lib/configs/routes");
const page_builder_1 = __importDefault(require("../../page-builder"));
const apis_1 = require("../apis");
const pageHandler = async (req, res, next) => {
    const activeRoute = routes_1.routes.find((route) => react_router_dom_1.matchPath(req.url, route)) || {};
    const constructHTML = activeRoute.fetchData ? apis_1.apis[req.path] : Promise.resolve();
    constructHTML(req).then((pageData) => page_builder_1.default(pageData, req).then((html) => res.send(html))).catch(next);
};
exports.default = pageHandler;
