"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderers_1 = require("@sinopiainn/components/lib/components/renderers/");
exports.generateTemplate = function (pageData) {
    if (pageData === void 0) { pageData = {}; }
    var content = renderers_1.renderers['home'](pageData);
    var template = "<!DOCTYPE html><html>" + content.head + content.body + "</html>";
    return template;
};
