"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("@sinopiainn/components/lib/configs/routes");
const handlers_1 = require("./handlers");
const wrapper = (handler) => function handlerWrapper(req, res, next) {
    Promise.resolve()
        .then(() => handler(req, res))
        .catch(next);
};
module.exports = (app) => {
    routes_1.routes.forEach((route) => {
        app.get(route.path, wrapper(handlers_1.pageHandler));
    });
};
