"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderers_1 = require("@sinopiainn/components/lib/components/renderers/");
exports.generateTemplate = function (pageData) {
    var content = renderers_1.renderers[pageData.type];
    var template = "<!DOCTYPE html><html>" + content + "</html>";
    return template;
};
