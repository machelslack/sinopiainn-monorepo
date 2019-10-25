"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = require("./handlers");
const wrapper = (handler) => function handlerWrapper(req, res, next) {
    Promise.resolve()
        .then(() => handler(req, res))
        .catch(next);
};
module.exports = (app) => {
    [
        ['/', wrapper(handlers_1.pageHandler)],
        ['/blog', wrapper(handlers_1.pageHandler)],
        ['/contact', wrapper(handlers_1.pageHandler)],
        ['/shop', wrapper(handlers_1.pageHandler)],
    ].forEach(([route, handler]) => {
        app.get(route, handler);
    });
};
