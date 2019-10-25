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
    const promise = activeRoute.api ? apis_1.apis[req.path] : Promise.resolve();
    promise(req).then((req) => page_builder_1.default(req).then((page) => res.send(page))).catch(next);
};
exports.default = pageHandler;
