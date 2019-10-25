"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("./handlers");
const wrapper = (handler) => function handlerWrapper(req, res, next) {
    Promise.resolve()
        .then(() => handler(req, res))
        .catch(next);
};
module.exports = (app) => {
    // [
    //   ['/', wrapper(pageHandler)],
    //   ['/blog', wrapper(pageHandler)],
    //   ['/contact', wrapper(pageHandler)],
    //   ['/shop', wrapper(pageHandler)],
    // ].forEach(([route, handler]) => {
    //   app.get(route,handler);
    // });
    app.get("*", wrapper(handlers_1.pageHandler));
};
