"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlers_1 = require("./handlers");
var wrapper = function (handler) {
    return function handlerWrapper(req, res, next) {
        Promise.resolve()
            .then(function () { return handler(req, res); })
            .catch(next);
    };
};
module.exports = function (app) {
    [
        ['/', wrapper(handlers_1.pageHandler)],
        ['/blog', wrapper(handlers_1.pageHandler)],
        ['/contact', wrapper(handlers_1.pageHandler)],
        ['/shop', wrapper(handlers_1.pageHandler)],
    ].forEach(function (_a) {
        var route = _a[0], handler = _a[1];
        app.get(route, handler);
    });
};
